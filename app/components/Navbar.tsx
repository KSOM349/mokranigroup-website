export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          Mokrani Group
        </a>

        <nav className="nav-links">
          <a href="#">Hem</a>
          <a href="#services">Tjänster</a>
          <a href="#projects">Projekt</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <a href="#contact" className="nav-button">
          Begär offert
        </a>
      </div>
    </header>
  );
}