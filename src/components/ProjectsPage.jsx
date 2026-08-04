// import { projects } from "../data/projects";

// export default function ProjectsPage({ onSelectProject, onBack }) {
//   return (
//     <section className="projects-page">
//       <button className="btn-ghost back-btn" onClick={onBack}>
//         ← Back
//       </button>
//       <h2 className="section-title">All Projects</h2>
//       <div className="projects-grid">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="project_card"
//             onClick={() => onSelectProject(project.id)}
//           >
//             <div className="project_image">
//               <img src={project.image} alt={project.title} />
//             </div>

//             <div className="project_content">
//               <h3>{project.title}</h3>

//               <p>{project.summary}</p>

//               <div className="project_tags">
//                 {project.tags.map((tag) => (
//                   <span key={tag}>{tag}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { projects } from "../data/projects";

export default function ProjectsPage({ onSelectProject, onBack }) {
  return (
    <section className="pl-page">

      <button className="pl-back-btn" onClick={onBack}>
         Back to Portfolio
      </button>

      <div className="section-header">
        <h2 className="section-title">All Projects</h2>

        <p className="pl-subtitle">
          A collection of mobile applications I've designed and developed
          using React Native, Kotlin and modern backend technologies.
        </p>
      </div>

      <div className="pl-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className="pl-card"
            onClick={() => onSelectProject(project.id)}
          >
            <div className="pl-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="pl-content">

              <h3>{project.title}</h3>

              <p>{project.summary}</p>

              <div className="pl-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <span className="pl-view-link">
                View Case Study →
              </span>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}