const ROWS = [
  { time: "15:30", title: <>Guest <em>arrival</em></>, note: "Check-in" },
  { time: "16:00", title: <>Gate <em>closure</em></>, note: "Be seated" },
  { time: "16:30", title: <>The <em>ceremony</em></>, note: "The big moment" },
  { time: "17:30", title: <>Cocktail <em>hour</em></>, note: "Mocktails & canapés" },
  { time: "18:30", title: <><em>Reception</em></>, note: "Hall opens" },
  { time: "19:00", title: <><em>Dinner</em></>, note: "Served" },
  { time: "23:00", title: <>The <em>last dance</em></>, note: "Until death do us part" },
];

export default function Programme() {
  return (
    <section className="programme dark" id="programme">
      <div className="section-head" style={{ textAlign: "center" }}>
        <span className="mono-eyebrow">The Programme</span>
        <h2 style={{ marginTop: 16 }}>
          To have and
          <br />
          <em>to hold…</em>
        </h2>
      </div>
      <div className="prog-list">
        {ROWS.map((r) => (
          <div className="prog-row" key={r.time}>
            <div className="prog-time">{r.time}</div>
            <div className="prog-title">{r.title}</div>
            <div className="prog-note">{r.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
