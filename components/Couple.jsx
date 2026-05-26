export default function Couple() {
  return (
    <section className="couple" id="couple">
      <div className="section-head" style={{ textAlign: "center" }}>
        <span className="mono-eyebrow">Meet the Couple</span>
        <h2 style={{ marginTop: 16 }}>
          A <em>doctor</em>, a <em>developer</em>,
          <br />
          and an awful lot of love.
        </h2>
      </div>
      <div className="couple-grid">
        <div className="person">
          <div>
            <div className="person-name">
              <em>Brynne</em> Prince
            </div>
            <dl className="person-meta">
              <dt>Role</dt>
              <dd>The groom</dd>
              <dt>Age</dt>
              <dd>28</dd>
              <dt>Work</dt>
              <dd>Software developer</dd>
              <dt>Loves</dt>
              <dd>Coffee &amp; gaming</dd>
            </dl>
          </div>
        </div>
        <div className="person">
          <div>
            <div className="person-name">
              <em>Thama</em> Tshigabe
            </div>
            <dl className="person-meta">
              <dt>Role</dt>
              <dd>The bride</dd>
              <dt>Age</dt>
              <dd>26</dd>
              <dt>Work</dt>
              <dd>Medical doctor</dd>
              <dt>Loves</dt>
              <dd>Tea &amp; reading</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
