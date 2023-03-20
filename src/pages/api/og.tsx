import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../../fonts/basiercircle-bold.otf", import.meta.url)
).then((res) => res.arrayBuffer());

const maxLength = 100;

const getText = (text: string) => {
  if (text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`;
  }

  return text;
};

export default async function handler(req: NextRequest) {
  const fontData = await font;

  try {
    const { searchParams } = new URL(req.url);

    const title = getText(searchParams.get("title") ?? "Josep Vidal");

    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(90deg, #ffb696, #ff7a95)",
            fontFamily: '"Basie"',
          }}
          tw="relative h-full w-full flex flex-col items-center justify-center"
        >
          <div tw="text-8xl text-white px-8">{title}</div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Basie",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
    // @ts-ignore
  } catch (e: never) {
    console.log(e?.message);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
