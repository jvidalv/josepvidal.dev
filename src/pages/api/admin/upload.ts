import type { NextApiRequest, NextApiResponse } from "next";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
};

const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml",
  "image/bmp",
  "image/tiff",
  "image/avif",
  "image/heic",
  "image/heif",
];

const MAX_FILE_SIZE_KB = 5 * 1024; // 5MB in KB

type UploadRequest = {
  file: string; // base64 encoded file
  filename: string;
  mimeType: string;
};

type SuccessResponse = {
  success: true;
  url: string;
};

type ErrorResponse = {
  success: false;
  error: string;
};

function validateAdminToken(req: NextApiRequest): boolean {
  const adminToken = process.env.ADMIN_API_TOKEN;
  if (!adminToken) {
    console.error("ADMIN_API_TOKEN environment variable is not set");
    return false;
  }

  const authHeader = req.headers["x-admin-token"];
  return authHeader === adminToken;
}

function validateMimeType(mimeType: string): boolean {
  return ALLOWED_MIME_TYPES.includes(mimeType);
}

function isBase64SizeValid(base64Data: string, maxSizeInKB: number): boolean {
  const sizeInBytes = Buffer.byteLength(base64Data, "base64");
  const sizeInKB = sizeInBytes / 1024;
  return sizeInKB <= maxSizeInKB;
}

function getS3Client() {
  return new S3Client({
    region: process.env.AWS_BUCKET_REGION!,
    credentials: {
      accessKeyId: process.env.MY_AWS_ACCESS_KEY!,
      secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY!,
    },
  });
}

function getPublicUrl(key: string): string {
  return `https://${process.env.AWS_PUBLIC_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${key}`;
}

async function uploadToS3(
  content: Buffer,
  filename: string,
  mimeType: string
): Promise<string> {
  const client = getS3Client();
  const key = `uploads/${Date.now()}-${filename}`;

  await client.send(
    new PutObjectCommand({
      Bucket: process.env.AWS_PUBLIC_BUCKET_NAME,
      Key: key,
      Body: content,
      ContentType: mimeType,
    })
  );

  return getPublicUrl(key);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  // Validate admin token
  if (!validateAdminToken(req)) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }

  try {
    const body = req.body as UploadRequest;

    // Validate required fields
    if (!body.file || !body.filename || !body.mimeType) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: file, filename, mimeType",
      });
    }

    // Validate MIME type
    if (!validateMimeType(body.mimeType)) {
      return res.status(400).json({
        success: false,
        error: `Invalid file type. Allowed types: ${ALLOWED_MIME_TYPES.join(", ")}`,
      });
    }

    // Validate file size
    if (!isBase64SizeValid(body.file, MAX_FILE_SIZE_KB)) {
      return res.status(400).json({
        success: false,
        error: `File too large. Maximum size is ${MAX_FILE_SIZE_KB / 1024}MB`,
      });
    }

    // Decode base64 file
    const content = Buffer.from(body.file, "base64");

    // Upload to S3
    const url = await uploadToS3(content, body.filename, body.mimeType);

    return res.status(200).json({
      success: true,
      url,
    });
  } catch (error) {
    console.error("Upload error:", error);

    if (error instanceof SyntaxError) {
      return res.status(400).json({
        success: false,
        error: "Invalid JSON in request body",
      });
    }

    if (error instanceof Error) {
      const message =
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error";
      return res.status(500).json({ success: false, error: message });
    }

    return res.status(500).json({ success: false, error: "Internal server error" });
  }
}
