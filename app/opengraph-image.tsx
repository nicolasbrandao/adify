import { ImageResponse } from "next/og";

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

const url = process.env.APP_URL;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          background: "#2c363f",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={`${url}/logo_circle.png`}
            alt="Adify"
            style={{
              width: "52%",
              height: "50%",
            }}
          />
          <p
            style={{
              fontSize: 64,
              fontWeight: "bold",
              color: "#88c0d0",
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            Adify
          </p>
        </div>
        <p
          style={{
            fontSize: 48,
            color: "white",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Ajudamos empresas a encontrarem seus indicadores, maturarem os
          resultados e escalarem no digital
        </p>
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
