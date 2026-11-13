import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

export default function Home() {
  return (
    <main>
      <JsonLd />
      <Navbar />
      <Hero />
      <Trust />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
