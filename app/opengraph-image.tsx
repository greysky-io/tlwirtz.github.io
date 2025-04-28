import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Greysky Digital - MVP Development Agency"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "40px",
      }}
    >
      <div style={{ fontSize: "64px", fontWeight: "bold" }}>GREYSKY</div>
      <div
        style={{
          fontSize: "32px",
          marginTop: "20px",
          color: "#ff00ff",
          fontWeight: "bold",
        }}
      >
        Ship your MVP while your competition is still in meetings
      </div>
    </div>,
    {
      ...size,
    },
  )
}
