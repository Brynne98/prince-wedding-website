const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdwdTPAubftTpJ-NCxi2JUAjrdfGYc-KoZkt5Bl7rhaXaSnPw/viewform?usp=publish-editor";

export default function RSVP() {
  return (
    <section className="rsvp" id="rsvp">
      <div className="section-head">
        <span className="mono-eyebrow">Will You Be There?</span>
        <h2 style={{ color: "var(--ink)" }}>
          <em style={{ color: "inherit" }}>R.</em>S
          <em style={{ color: "inherit" }}>.V.</em>P
        </h2>
        <div className="deadline">Kindly respond by 1 August 2026</div>
      </div>

      <div className="rsvp-cta">
        <a
          className="rsvp-submit rsvp-link"
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          RSVP form &nbsp;↗
        </a>
      </div>
    </section>
  );
}
