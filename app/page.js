import fs from "fs";
import path from "path";
import BeatGrid from "./components/BeatGrid";
import Cart from "./components/Cart";
import NowPlayingBar from "./components/NowPlayingBar";

export default function Page() {
  const filePath = path.join(process.cwd(), "data", "beats.json");
  const data = fs.readFileSync(filePath, "utf-8");
  const beats = JSON.parse(data);

  return (
    <>
      {/* ✅ MAIN CONTENT */}
      <div
        style={{
          background: "#0d0d0d",
          color: "white",
          minHeight: "100vh",
          padding: "30px",
          fontFamily: "Arial, sans-serif",
          paddingBottom: "80px",
        }}
      >
        {/* ✅ HEADER WITH IMAGE + TEXT */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          {/* ✅ HEADSHOT IMAGE */}
          <img
            src="/images/head-shot1.jpg"   // ✅ change if keeping space
            alt="My Image"
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",   // makes it circular (nice touch)
              objectFit: "cover",
            }}
          />

          {/* ✅ TEXT + ICON */}
          <h1 style={{ fontSize: "28px" }}>
            🎧 Pickett Labs
          </h1>
        </div>

        {/* ✅ CART */}
        <Cart />
     
        {/* ✅ GRID */}
        <BeatGrid beats={beats} />
      </div>

      {/* ✅ PLAYER */}
      <NowPlayingBar />
    </>
  );
}
