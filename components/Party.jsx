const MEMBERS = [
  { role: "Sister of the Groom", name: "Amy Reynolds", photo: "/photos/amy.jpg" },
  { role: "Best Man", name: "Paul Theron", photo: "/photos/paul.jpg", objectPosition: "55% center" },
  { role: "Best Woman", name: "Candice Theron", photo: "/photos/candice.jpg", zoom: 1.3, objectPosition: "center 30%" },
  { role: "Brother of the Bride", name: "Phumudzo Tshigabe", photo: "/photos/phumudzo.jpg", objectPosition: "85% center" },
  { role: "Maid of Honour", name: "Cindy Ju", photo: "/photos/cindy.jpg", objectPosition: "70% center" },
];

export default function Party() {
  return (
    <section className="party dark" id="party">
      <div className="section-head" style={{ textAlign: "center" }}>
        <span className="mono-eyebrow">By Our Side</span>
        <h2 style={{ marginTop: 16 }}>
          Meet the
          <br />
          <em>wedding party</em>.
        </h2>
      </div>

      <div className="party-grid">
        {MEMBERS.map((m) => (
          <div className="party-card" key={m.name}>
            <div className="party-photo-frame">
              <img
                className="party-photo"
                src={m.photo}
                alt={m.name}
                style={{
                  objectPosition: m.objectPosition,
                  transform: m.zoom ? `scale(${m.zoom})` : undefined,
                  transformOrigin: m.transformOrigin,
                }}
              />
            </div>
            <div>
              <span className="role">{m.role}</span>
              <h3>{m.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
