export default function Page() {
  const beats = [
    {
      title: "My Beat",
      price: 25,
      url: "/beats/mybeat.mp3",
    },
  ];

  return (
    <div style={{ background: "black", color: "white", padding: 20 }}>
      <h1>Welcome to Pickett Labs</h1>

      {beats.map((beat, index) => (
        <div key={index} style={{ marginTop: 20 }}>
          <h3>{beat.title}</h3>

          {/* ✅ CORRECT AUDIO PLAYER */}
          <audio controls src={beat.url}></audio>

          <p>${beat.price}</p>

          <button>Buy</button>
        </div>
      ))}
    </div>
  );
}
