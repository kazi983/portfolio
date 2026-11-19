import About from "./components/About";
import Experience from "./components/Experience";
import FloatingEmail from "./components/FloatingEmail";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ProgressBar from "./components/ProgressBar";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

/** Renders the portfolio application layout. */
function App() {
  return (
    <>
      <Nav />
      <ProgressBar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <FloatingEmail />
    </>
  );
}

export default App;
