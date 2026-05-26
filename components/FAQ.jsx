"use client";
import { useRef, useState } from "react";

const ITEMS = [
  {
    q: "Can I bring my kids?",
    a: "All children under 16 of those invited are welcome. Please see the Children's section below for everything about the kid's room and how the day works for them.",
  },
  {
    q: "Can I bring another person?",
    a: "No — only guests permitted to bring a plus-one may bring one. No exceptions can be made on the day, as the seating and catering is personalised.",
  },
  {
    q: "Is the venue accessible?",
    a: "Yes. Entrances and restrooms are wheelchair-accessible. Please contact us in advance and we will make any necessary arrangements to support you.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable shoes and an empty stomach! While all wedding gifts would be appreciated, we do not expect any gifts so please do not feel pressured to bring anything.",
  },
  {
    q: "When do I need to RSVP by?",
    a: (
      <>
        Please RSVP no later than <strong>1 August 2026</strong>. The Google
        Form link is below — it takes about a minute.
      </>
    ),
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  const inner = useRef(null);
  const maxHeight = open && inner.current ? inner.current.scrollHeight : 0;

  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen((o) => !o)}>
        {q}
        <span className="plus" />
      </button>
      <div className="faq-a" style={{ maxHeight: `${maxHeight}px` }}>
        <div className="faq-a-inner" ref={inner}>
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="faq dark" id="faq">
      <div className="section-head" style={{ textAlign: "center" }}>
        <span className="mono-eyebrow">Common Questions</span>
        <h2 style={{ marginTop: 16 }}>
          In case you're <em>wondering…</em>
        </h2>
      </div>

      <div className="faq-list">
        {ITEMS.map((it, i) => (
          <Item key={i} q={it.q} a={it.a} />
        ))}
      </div>
    </section>
  );
}
