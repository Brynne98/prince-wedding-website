const BLOCKS = [
  {
    h: "The Day, For Them",
    items: [
      "During the ceremony, children sit in the chapel next to their parents.",
      "During cocktail hour, you will be directed to the kid's room to get your little ones settled.",
      "During the reception, children under 12 are encouraged to stay, play and sleep in the kid's room — they may join the reception if escorted by a parent.",
      "At the end of the evening, mothers may collect their children from the kid's room.",
    ],
  },
  {
    h: "The Kid's Room",
    items: [
      "Single open room for children aged 1 to 12, with one door.",
      "Two trusted babysitters on duty for the entire event.",
      "Mattress & pillow for every child to sleep whenever they need.",
      "Food provided. Activities provided. Tablets allowed with headphones.",
      "Close to the family bathroom and changing room.",
    ],
  },
  {
    h: "Rules of the Kid's Room",
    items: [
      <>
        <strong>
          Only mothers, the bride and the two designated babysitters
        </strong>{" "}
        are permitted inside — non-negotiable, for the safety of the children.
      </>,
      "Mothers introduce themselves and leave contact details with the babysitters on drop-off.",
      "No child may leave the kid's room without their mother — no other adult may collect a child at the end of the night.",
      "Please label items you've brought from home for your child.",
    ],
  },
  {
    h: "Reminders",
    items: [
      "Children under 12 must be supervised at all times. When not in the kid's room, they must stay in close proximity to parents.",
      "Children may wear smart casual; no colour restrictions; please ensure they're neatly and comfortably dressed.",
      "Please pack a labelled diaper bag for any and all accidents.",
    ],
  },
];

export default function Children() {
  return (
    <section className="children" id="children">
      <div className="section-head" style={{ textAlign: "center" }}>
        <span className="mono-eyebrow">The Little People</span>
        <h2 style={{ marginTop: 16 }}>
          The <em>Children's</em> Section.
        </h2>
        <p style={{ marginTop: 20, textAlign: "center" }}>
          It is important to us that we celebrate this day with those we care
          about the most — little people included. We have made a dedicated play
          &amp; rest room for all children under 12.
        </p>
      </div>

      <div className="kids-cols">
        {BLOCKS.map((b) => (
          <div className="kids-block" key={b.h}>
            <h3>{b.h}</h3>
            <ul>
              {b.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
