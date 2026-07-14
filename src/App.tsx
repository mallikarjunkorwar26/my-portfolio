import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import TechStack from "./components/TechStack";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import NotFound from "./components/NotFound";
import { useTheme } from "./hooks/useTheme";

const KNOWN_PATHS = new Set(["/", "/index.html"]);

export default function App() {
  useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  // Lightweight path check to satisfy the "404 page" requirement
  // without pulling in a full router for a single-page portfolio.
  const isKnownPath = KNOWN_PATHS.has(window.location.pathname);

  if (!isKnownPath) {
    return <NotFound />;
  }

  return (
    <>
      <PageLoader visible={loading} />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Services />
        <TechStack />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
