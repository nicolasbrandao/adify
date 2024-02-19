import { ImageResponse } from "next/og";
import LogoCircle from "@/public/logo_circle.png";
import Image from "next/image";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Image
          src={LogoCircle}
          width={32}
          height={32}
          alt="Adify - Growth Marketing"
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
