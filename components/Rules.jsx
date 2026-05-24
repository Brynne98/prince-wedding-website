export default function Rules() {
  return (
    <section className="rules">
      <div className="section-head" style={{ textAlign: "center" }}>
        <span className="mono-eyebrow">Important Rules &amp; Notices</span>
        <h2 style={{ marginTop: 16 }}>
          A few <em>house rules</em>.
        </h2>
      </div>

      <div className="rules-stack">
        <div className="rule">
          <div className="rule-num">01</div>
          <div>
            <div className="rule-title">
              This is a{" "}
              <strong
                style={{
                  textTransform: "uppercase",
                  textDecoration: "underline",
                  textUnderlineOffset: 4,
                }}
              >
                non-smoking
              </strong>{" "}
              wedding.
            </div>
            <p className="rule-body">
              No cigarettes, e-cigarettes, vapes or similar are allowed on the
              premises. We reserve the right to confiscate any items that are
              not compliant.
            </p>
          </div>
        </div>
        <div className="rule">
          <div className="rule-num">02</div>
          <div>
            <div className="rule-title">
              This is a <strong>non-alcoholic</strong> wedding.
            </div>
            <p className="rule-body">
              Please do not bring any alcoholic beverages onto the premises.
              Mocktails and a full non-alcoholic bar will be available
              throughout the evening.
            </p>
          </div>
        </div>
        <div className="rule">
          <div className="rule-num">03</div>
          <div>
            <div className="rule-title">
              No <em>additional guests</em> — please.
            </div>
            <p className="rule-body">
              This is a seated and personalised wedding and we cannot cater for
              unexpected guests. Only those permitted to bring a plus-one may
              bring one.
            </p>
          </div>
        </div>
        <div className="rule">
          <div className="rule-num">04</div>
          <div>
            <div className="rule-title">
              Children under 12 <em>must be supervised</em> at all times.
            </div>
            <p className="rule-body">
              See the children's section below for the full setup — including
              the dedicated kid's room with babysitters.
            </p>
          </div>
        </div>
        <div className="rule">
          <div className="rule-num">05</div>
          <div>
            <div className="rule-title">
              <em>Photos welcome.</em> This is not an unplugged ceremony.
            </div>
            <p className="rule-body">
              Take as many photos as you like throughout the day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
