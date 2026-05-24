export default function Dress() {
  return (
    <section className="dress" id="dress">
      <div className="dress-hero">
        <span className="mono-eyebrow">Dress Code</span>
        <h2>
          Formal
          <br />
          <em>Attire</em>
        </h2>
        <p>
          Formal (or Tshivenda traditional) attire, no casual wear. No specific
          colour requirements — when in doubt, a classic black formal outfit is
          always appropriate.
        </p>
      </div>

      <div className="dress-grid">
        <div className="dress-card">
          <h3>Men</h3>
          <ul>
            <li>Tuxedo or formal suit</li>
            <li>Waistcoat is not required</li>
            <li>Traditional Tshivenda attire is warmly welcomed and considered formal</li>
            <li>No shorts, casual wear, or sandals</li>
          </ul>
        </div>
        <div className="dress-card">
          <h3>Women</h3>
          <ul>
            <li>Full-length formal dress</li>
            <li>Traditional Tshivenda attire is warmly welcomed</li>
            <li>No white dresses or outfits (reserved for the bride)</li>
            <li>No short dresses or casual wear</li>
            <li>Accessories to your liking</li>
          </ul>
        </div>
        <div className="dress-card">
          <h3>Under 18</h3>
          <ul>
            <li>Smart casual attire</li>
            <li>No colour restrictions</li>
            <li>Please ensure they are neatly and comfortably dressed</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
