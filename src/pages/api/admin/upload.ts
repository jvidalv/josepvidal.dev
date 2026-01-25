import type { NextApiRequest, NextApiResponse } from "next";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const config = {
  api: {
    bodyParser: false,
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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

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
  return ALLOWED_MIME_TYPES.some((allowed) => mimeType.startsWith(allowed));
}

function getExtensionFromMimeType(mimeType: string): string {
  const map: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/gif": "gif",
    "image/webp": "webp",
    "image/svg+xml": "svg",
    "image/bmp": "bmp",
    "image/tiff": "tiff",
    "image/avif": "avif",
    "image/heic": "heic",
    "image/heif": "heif",
  };
  return map[mimeType] || "jpg";
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

async function getRawBody(req: NextApiRequest): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  if (!validateAdminToken(req)) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }

  try {
    const contentType = req.headers["content-type"] || "";

    if (!validateMimeType(contentType)) {
      return res.status(400).json({
        success: false,
        error: `Invalid file type. Allowed types: ${ALLOWED_MIME_TYPES.join(", ")}`,
      });
    }

    const content = await getRawBody(req);

    if (content.length === 0) {
      return res.status(400).json({
        success: false,
        error: "No file content received",
      });
    }

    if (content.length > MAX_FILE_SIZE) {
      return res.status(400).json({
        success: false,
        error: `File too large. Maximum size is ${MAX_FILE_SIZE / 1024 / 1024}MB`,
      });
    }

    const ext = getExtensionFromMimeType(contentType);
    const filename = `image.${ext}`;

    const url = await uploadToS3(content, filename, contentType);

    return res.status(200).json({
      success: true,
      url,
    });
  } catch (error) {
    console.error("Upload error:", error);

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
