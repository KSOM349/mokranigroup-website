export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-label">
          BYGG • GOLV • IT
        </span>

        <h1>Mokrani Group</h1>

        <p className="hero-description">
          Professionella lösningar inom bygg, golvläggning och IT.
          Vi hjälper företag och privatpersoner med kvalitet,
          noggrannhet och pålitlig service i hela Sverige.
        </p>

        <div className="hero-buttons">
          <a href="#services" className="hero-primary">
            Våra tjänster
          </a>

          <a href="#contact" className="hero-secondary">
            Begär offert
          </a>
        </div>
      </div>
    </section>
  );
}