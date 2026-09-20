import { useState } from "react";
import Reveal from "./Reveal";
import { IconArrowLeft, IconArrowRight } from "./Icons";
import { projects, categories } from "../data/projects";
import { iconFor } from "../data/tagIcons";

function TagPill({ tag }) {
  const match = iconFor(tag);
  return (
    <span className={match ? `has-icon ${match.cls}` : ""}>
      {match && <match.Icon />}
      {tag}
    </span>
  );
}

export default function ProjectsPage({ onSelectProject, onBack }) {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter(
          (p) => p.category === filter || p.tags.includes(filter),
        );

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

        <Reveal className="filter-tabs">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              className={`filter-tab${filter === cat ? " active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="pl-count fade-up">
          Showing <b>{visible.length}</b> of {projects.length} projects
        </div>

        <div className="pl-grid">
          {visible.map((project, i) => {
            const isLive = Boolean(project.playStoreUrl);
            return (
              <Reveal
                as="button"
                key={project.id}
                index={i}
                type="button"
                className="pl-card"
                onClick={() => onSelectProject(project.id)}
              >
                <span className="pl-index">{String(i + 1).padStart(2, "0")}</span>

                <div className="pl-left">
                  <div className="pl-app-icon">
                    <img src={project.image} alt="" loading="lazy" />
                  </div>

                  <div className="pl-info">
                    <div className="pl-title-row">
                      <h3>{project.title}</h3>
                      {isLive && (
                        <span className="pl-live">
                          <span className="live-dot" />
                          Live
                        </span>
                      )}
                    </div>

                    <span className="pl-company">
                      {project.company} · {project.category}
                    </span>

                    <div className="pl-tags">
                      {project.tags.map((tag) => (
                        <TagPill tag={tag} key={tag} />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
