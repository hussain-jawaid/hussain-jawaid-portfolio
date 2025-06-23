import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="work">
        <Projects />
      </section>
      <section id="about">
        <About />
        <Skills />
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
