const MEMBERS = [
  { role: "Sister of the Bride", name: "Amy Reynolds", photo: "/photos/party-1.webp" },
  { role: "Best Man", name: "Paul Theron", photo: "/photos/party-2.webp" },
  { role: "Best Woman", name: "Candice Theron", photo: "/photos/party-3.webp" },
  { role: "Maid of Honour", name: "Cindy Ju", photo: "/photos/party-4.webp" },
  { role: "Brother of the Groom", name: "Phumudzo Tshigabe", photo: "/photos/party-5.webp" },
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
            <img className="party-photo" src={m.photo} alt={m.name} />
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
