export default function DetailsStrip() {
  return (
    <section className="details-strip">
      <div className="details-grid">
        <div className="detail-item">
          <span className="mono-label">Date</span>
          <div className="v">
            Sunday <em>20<span style={{ fontSize: "0.6em" }}>th</span></em>
            <br />
            September 2026
          </div>
        </div>
        <div className="detail-item">
          <span className="mono-label">Check‑in &amp; Ceremony</span>
          <div className="v">
            15:30 <em>arrival</em>
            <br />
            16:30 <em>ceremony</em>
          </div>
        </div>
        <div className="detail-item">
          <span className="mono-label">Venue</span>
          <div className="v">
            Inimitable Wedding Venue,
            <br />
            <em>Muldersdrift, Johannesburg</em>
          </div>
        </div>
        <div className="detail-item">
          <span className="mono-label">RSVP By</span>
          <div className="v">
            01 <em>August</em>
            <br />
            2026
          </div>
        </div>
      </div>
    </section>
  );
}
