import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Assignments from "./components/Assignments";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main>
      <JsonLd />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Assignments />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
