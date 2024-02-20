import { ImageResponse } from "next/og";
import LogoCircle from "@/public/logo_circle.png";
import NextImage from "next/image";

export const runtime = "edge";

export const alt = "Adify - Growth Marketing";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function getFont() {
  const url = process.env.APP_URL;
  const res = await fetch(`${url}/fonts/Montserrat-Regular.ttf`);
  return res.arrayBuffer();
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NextImage
          src={LogoCircle}
          width={400}
          height={400}
          alt="Adify - Growth Marketing"
        />
        <p>Adify - Growth Marketing</p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Montserrat",
          data: await getFont(),
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
