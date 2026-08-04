// import { projects } from "../data/projects";

// export default function ProjectDetail({ projectId, onBack }) {
//   const project = projects.find((p) => p.id === projectId);

//   if (!project) return null;

//   return (
//     <section className="project_detail">

//       <button className="back_btn" onClick={onBack}>
//         ← Back to Projects
//       </button>

//       <div className="project_detail_card">

//         <div className="project_hero_image">
//           <img src={project.image} alt={project.title} />
//         </div>

//         <div className="project_detail_content">

//           <h1>{project.title}</h1>

//           <div className="project_tags">
//             {project.tags.map((tag) => (
//               <span key={tag}>{tag}</span>
//             ))}
//           </div>

//           <p>{project.description}</p>

//           <div className="project_links">
//             {project.github && (
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="btn_primary"
//               >
//                 GitHub
//               </a>
//             )}

//             {project.liveUrl && (
//               <a
//                 href={project.liveUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="btn_ghost"
//               >
//                 Live Demo
//               </a>
//             )}
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }

import { projects } from "../data/projects";

export default function ProjectDetail({ projectId, onBack }) {
  const project = projects.find((p) => p.id === projectId);

  if (!project) return null;

  return (
    <section className="pd-page">
      
      <button className="pd-back-btn" onClick={onBack}>
         Back to Projects
      </button>

      {/* Hero */}

      <div className="pd-hero">

        <div className="pd-preview">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="pd-info">

          <span className="pd-label">
            Featured Project
          </span>

          <h1 className="pd-title">{project.title}</h1>

          <p className="pd-summary">
            {project.summary}
          </p>

          <div className="pd-tags">
            {project.tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="pd-actions">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="pd-btn-primary"
              >
                View Source
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="pd-btn-secondary"
              >
                Live Demo
              </a>
            )}

          </div>

        </div>

      </div>

      {/* Divider */}

      <div className="pd-divider"></div>

      {/* Description */}

      <div className="pd-section">

        <h2 className="pd-hero">Overview</h2>

        <p className="pd-info">{project.description}</p>

      </div>

    </section>
  );
}