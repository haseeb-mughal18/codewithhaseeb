import { IconArrowLeft, IconArrowRight } from "./Icons";
import { projects } from "../data/projects";
import playStoreBadge from "../assets/google-play.png";

export default function ProjectDetail({ projectId, onBack }) {
  const project = projects.find((p) => p.id === projectId);

  if (!project) return null;

  const isPlayStore = project.liveUrl?.includes("play.google.com");

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
            <div className="pd-label-row">
              <span className="pd-label">Featured Project</span>

              {project.playStoreUrl && (
                <span className="live-status">
                  <span className="live-dot" />
                  {isPlayStore ? "Live on Google Play" : "Live"}
                </span>
              )}
            </div>

            <h1 className="pd-title">{project.title}</h1>

            <p className="pd-summary">{project.summary}</p>

            <div className="pd-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {(project.github || project.playStoreUrl) && (
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

                {project.playStoreUrl && !isPlayStore && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                  >
                    <span className="pd-google-play-text">Get it on Google Play</span>
                    <img src={playStoreBadge} alt="Get it on Google Play" className="pd-google-play-button" />
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
