import Reveal from "./Reveal";
import { IconArrowLeft, IconArrowRight } from "./Icons";
import { projects } from "../data/projects";

export default function ProjectsPage({ onSelectProject, onBack }) {
  return (
    <section className="subpage">
      <div className="wrap">
        <button type="button" className="back-btn" onClick={onBack}>
          <IconArrowLeft />
          Move Back
        </button>

        <div className="sec-title-wrap">
          <div className="sec-watermark">WORKS</div>
          <h2 className="sec-title">
            ALL <span>PROJECTS</span>
          </h2>
          <p className="subpage-lead" style={{ marginTop: 18 }}>
            A collection of mobile applications I've designed and developed
            using React Native, Kotlin and modern backend technologies.
          </p>
        </div>

        <div className="pl-grid">
          {projects.map((project, i) => (
            <Reveal
              as="button"
              key={project.id}
              index={i}
              type="button"
              className="pl-card"
              onClick={() => onSelectProject(project.id)}
            >
              <div className="pl-left">
                <div className="pl-app-icon">
                  <img src={project.image} alt="" loading="lazy" />
                </div>

                <div className="pl-info">
                  <h3>{project.title}</h3>
                  <span className="pl-company">{project.company}</span>

                  <div className="pl-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <p>{project.summary}</p>
                </div>
              </div>

              <span className="pl-open">
                View Project
                <IconArrowRight />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
