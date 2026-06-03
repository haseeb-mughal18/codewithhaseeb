import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import './App.css';
import About from './components/About';

export default function App() {
  return (
    <>
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <About />
    </>
  );
}
