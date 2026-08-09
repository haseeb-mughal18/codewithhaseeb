import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import SocialRail from "./components/SocialRail";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";
import ProjectDetail from "./components/ProjectDetail";
import "./App.css";

export default function App() {
  const [view, setView] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  const pendingHash = useRef(null);

  useEffect(() => {
    const hash = pendingHash.current;
    pendingHash.current = null;

    if (view !== "home" || !hash) {
      window.scrollTo(0, 0);
      return;
    }

    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }, [view]);

  const goHome = (hash) => {
    const target = hash && hash !== "#hero" ? hash : null;

    // Already home: the effect won't re-run, so scroll here instead.
    if (view === "home") {
      if (target) {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    pendingHash.current = target;
    setView("home");
  };

  const openProject = (id) => {
    setSelectedProject(id);
    setView("project-detail");
  };

  const isSubPage = view !== "home";

  return (
    <>
      <div className="grain" />
      <Navbar onHome={goHome} isSubPage={isSubPage} />
      <SocialRail />

      {view === "projects" && (
        <ProjectsPage
          onSelectProject={openProject}
          onBack={() => goHome("#portfolio")}
        />
      )}

      {view === "project-detail" && (
        <ProjectDetail
          projectId={selectedProject}
          onBack={() => setView("projects")}
        />
      )}

      {view === "home" && (
        <>
          <Hero onViewProjects={() => setView("projects")} />
          <About />
          <Skills />
          <Resume />
          <Portfolio
            onSelectProject={openProject}
            onViewAll={() => setView("projects")}
          />
          <Contact />
          <Blog />
        </>
      )}

      <Footer />
    </>
  );
}
