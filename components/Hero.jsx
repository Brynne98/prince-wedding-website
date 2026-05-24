import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grain" />
      <div className="hero-inner">
        <div className="hero-eyebrow">An Invitation</div>

        <h1 className="hero-names">
          <span className="hero-name left" aria-label="Brynne">
            Brynne
          </span>
          <span className="amp">&amp;</span>
          <span className="hero-name right" aria-label="Thama">
            Thama
          </span>
        </h1>

        <div className="hero-date">
          <div className="hero-date-line">Sunday · 20 September 2026</div>
          <div className="hero-date-line venue">
            Inimitable Wedding Venue · Muldersdrift, Johannesburg
          </div>
        </div>
      </div>

      <Countdown />
    </section>
  );
}
