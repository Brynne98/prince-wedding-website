const ITEMS = [
  {
    side: "left",
    date: "March 2022",
    title: (
      <>
        <em>First</em> conversation
      </>
    ),
    body: "Eternity beckoned.",
  },
  {
    side: "right",
    date: "15 April 2022",
    title: (
      <>
        The <em>first date</em>
      </>
    ),
    body: "Three hours that felt like twenty minutes.",
  },
  {
    side: "left",
    date: "23 April 2022",
    title: (
      <>
        Brynne asked Thama to be <em>his girlfriend</em>
      </>
    ),
    body: "She said yes.",
  },
  {
    side: "right",
    date: "2 December 2023",
    title: (
      <>
        Brynne asked Thama to be <em>his wife</em>
      </>
    ),
    body: "She said yes again.",
  },
  {
    side: "left",
    date: "20 September 2026",
    title: (
      <>
        Thama says <em>yes to forever</em>
      </>
    ),
    body: "And you, lovely person, are invited to witness it.",
    finale: true,
  },
];

export default function Story() {
  return (
    <section className="story" id="story">
      <div className="section-head">
        <span className="mono-eyebrow">Our Story</span>
        <h2 style={{ marginTop: 16 }}>
          How we
          <br />
          <em>got here</em>.
        </h2>
        <p className="story-intro">
          Four years in the making — a few first messages, a first nervous date,
          and the kind of yes that changes everything.
        </p>
      </div>

      <div className="timeline">
        {ITEMS.map((it, i) => {
          const content = (
            <>
              <div className="tl-date">{it.date}</div>
              <div className="tl-title">{it.title}</div>
              <p className="tl-body">{it.body}</p>
            </>
          );
          return (
            <div className="tl-item" key={i}>
              <div className={`tl-content ${it.side === "left" ? "left" : "left empty"}`}>
                {it.side === "left" ? content : null}
              </div>
              <div
                className="tl-dot"
                style={
                  it.finale
                    ? {
                        background: "var(--brass-bright)",
                        boxShadow:
                          "0 0 0 8px var(--cream), 0 0 0 9px var(--brass)",
                      }
                    : undefined
                }
              />
              <div className={`tl-content ${it.side === "right" ? "right" : "right empty"}`}>
                {it.side === "right" ? content : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
