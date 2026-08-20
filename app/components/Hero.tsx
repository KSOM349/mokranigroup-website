export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-label">
        BYGG • GOLV • STÄD
        </span>

      <h1>Vi bygger framtidens lösningar.</h1>

       <p className="hero-description">
Mokrani Group AB erbjuder professionella tjänster inom bygg, golvläggning och städ för företag, bostadsrättsföreningar och privatpersoner.
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