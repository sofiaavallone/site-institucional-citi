import { ImageResponse } from "next/og";

// Imagem Open Graph gerada em build/runtime — o Next injeta automaticamente as
// tags og:image e twitter:image apontando para esta rota.
export const alt = "CITi — A tecnologia do futuro entregue hoje";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 96,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-2px",
          }}
        >
          cit<span style={{ color: "#00DB58" }}>i</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          A tecnologia do futuro, entregue hoje.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#00DB58",
            fontWeight: 500,
          }}
        >
          Centro Integrado de Tecnologia da Informação · CIn UFPE
        </div>
      </div>
    ),
    { ...size },
  );
}
