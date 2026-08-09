import { IconArrowLeft, IconArrowRight } from "./Icons";
import { projects } from "../data/projects";

export default function ProjectDetail({ projectId, onBack }) {
  const project = projects.find((p) => p.id === projectId);

  if (!project) return null;

  return (
    <section className="subpage">
      <div className="wrap">
        <button type="button" className="back-btn" onClick={onBack}>
          <IconArrowLeft />
          Move Back
        </button>

        <div className="pd-hero">
          <div className="pd-preview">
            <img src={project.image} alt={project.title} />
          </div>

          <div>
            <span className="pd-label">Featured Project</span>

            <h1 className="pd-title">{project.title}</h1>

            <p className="pd-summary">{project.summary}</p>

            <div className="pd-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {(project.github || project.liveUrl) && (
              <div className="pd-actions">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-yellow"
                  >
                    View Source
                    <IconArrowRight />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                  >
                    Live Demo
                    <IconArrowRight />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="pd-divider" />

        <div>
          <h2 className="pd-block-title">
            OVER<span>VIEW</span>
          </h2>
          <p className="pd-body">{project.description}</p>
        </div>

        <div className="pd-divider" />

        <div>
          <h2 className="pd-block-title">
            BUILT <span>WITH</span>
          </h2>
          <div className="pd-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
