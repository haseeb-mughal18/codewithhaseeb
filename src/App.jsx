// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import CustomCursor from './components/CustomCursor';
// import './App.css';
// import About from './components/About';

// // export default function App() {
// //   return (
// //     <>
// //       <div className="noise-overlay" />
// //       <CustomCursor />
// //       <Navbar />
// //       <Hero />
// //       <Skills />
// //       <Projects />
// //       <Contact />
// //       <About />
// //     </>
// //   );
// // }

// export default function App() {
// const [view, setView] = useState("home");
// const [selectedProject, setSelectedProject] = useState(null);


//   if (view.page === "projects") {
//     return (
//       <>
//         <div className="noise-overlay" />
//         <CustomCursor />
//         <Navbar />
//         <ProjectsPage
//           onSelectProject={(id) => setView({ page: "project-detail", projectId: id })}
//           onBack={() => setView({ page: "home", projectId: null })}
//         />
//       </>
//     );
//   }

//   if (view.page === "project-detail") {
//     return (
//       <>
//         <div className="noise-overlay" />
//         <CustomCursor />
//         <Navbar />
//         <ProjectDetail
//           projectId={view.projectId}
//           onBack={() => setView({ page: "projects", projectId: null })}
//         />
//       </>
//     );
//   }

//   return (
//     <>
//       <div className="noise-overlay" />
//       <CustomCursor />
//       <Navbar />
//       <Hero onViewProjects={() => setView({ page: "projects", projectId: null })} />
//       <Skills />
//       <Projects onViewAll={() => setView({ page: "projects", projectId: null })} />
//       <Contact />
//       <About />
//     </>
//   );
// }


import { useState } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import About from './components/About';
import './App.css';

export default function App() {
  const [view, setView] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  if (view === "projects") {
    return (
      <>
        <div className="noise-overlay" />
        <CustomCursor />
        <Navbar />
        <ProjectsPage
          onSelectProject={(id) => { setSelectedProject(id); setView("project-detail"); }}
          onBack={() => setView("home")}
        />
      </>
    );
  }

  if (view === "project-detail") {
    return (
      <>
        <div className="noise-overlay" />
        <CustomCursor />
        <Navbar />
        <ProjectDetail
          projectId={selectedProject}
          onBack={() => setView("projects")}
        />
      </>
    );
  }

  return (
    <>
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <Hero onViewProjects={() => setView("projects")} />
      <Skills />
      <Projects onViewAll={() => setView("projects")} />
      <Contact />
      <About />
    </>
  );
}