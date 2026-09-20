import { IconArrowLeft, IconArrowRight, IconLayers, IconSmartphone } from "./Icons";
import { projects } from "../data/projects";
import { iconFor } from "../data/tagIcons";
import playStoreBadge from "../assets/google-play.png";

function TagPill({ tag }) {
  const match = iconFor(tag);
  return (
    <span className={match ? `has-icon ${match.cls}` : ""}>
      {match && <match.Icon />}
      {tag}
    </span>
  );
}

export default function ProjectDetail({ projectId, onBack, onSelectProject }) {
  const index = projects.findIndex((p) => p.id === projectId);
  const project = projects[index];

  if (!project) return null;

  const isPlayStore = project.liveUrl?.includes("play.google.com");
  const isLive = Boolean(project.playStoreUrl);

  const prevProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <section className="subpage">
      <div className="wrap">
        <button type="button" className="back-btn" onClick={onBack}>
          <IconArrowLeft />
          Move Back
        </button>

        <div className="pd-hero">
          <div className="pd-preview">
            <div className="pd-preview-bar">
              <span className="pd-dot" />
              <span className="pd-dot" />
              <span className="pd-dot" />
              <span className="pd-preview-url">
                {isLive ? "play.google.com" : "preview"}
              </span>
            </div>
            <img src={project.image} alt={project.title} />
          </div>

          <div>
            <div className="pd-label-row">
              <span className="pd-label">Featured Project</span>

              {isLive && (
                <span className="live-status">
                  <span className="live-dot" />
                  {isPlayStore ? "Live on Google Play" : "Live"}
                </span>
              )}
            </div>

            <h1 className="pd-title">{project.title}</h1>

            <p className="pd-summary">{project.summary}</p>

            <div className="pd-meta">
              <div className="pd-meta-item">
                <div className="pd-meta-ic">
                  <IconLayers />
                </div>
                <div>
                  <b>Category</b>
                  <span>{project.category}</span>
                </div>
              </div>

              <div className="pd-meta-item">
                <div className="pd-meta-ic">
                  <IconSmartphone />
                </div>
                <div>
                  <b>Client</b>
                  <span>{project.company}</span>
                </div>
              </div>

              <div className="pd-meta-item">
                <div className="pd-meta-ic">
                  <span className={`pd-status-dot${isLive ? " is-live" : ""}`} />
                </div>
                <div>
                  <b>Status</b>
                  <span>{isLive ? "Published" : "Completed"}</span>
                </div>
              </div>
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
            TECH <span>STACK</span>
          </h2>
          <div className="pd-tags">
            {project.tags.map((tag) => (
              <TagPill tag={tag} key={tag} />
            ))}
          </div>
        </div>

        <div className="pd-divider" />

        <div className="pd-nav">
          <button
            type="button"
            className="pd-nav-item pd-nav-prev"
            onClick={() => onSelectProject?.(prevProject.id)}
          >
            <IconArrowLeft />
            <div>
              <span className="pd-nav-lbl">Previous Project</span>
              <span className="pd-nav-title">{prevProject.title}</span>
            </div>
          </button>

          <button
            type="button"
            className="pd-nav-item pd-nav-next"
            onClick={() => onSelectProject?.(nextProject.id)}
          >
            <div>
              <span className="pd-nav-lbl">Next Project</span>
              <span className="pd-nav-title">{nextProject.title}</span>
            </div>
            <IconArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
