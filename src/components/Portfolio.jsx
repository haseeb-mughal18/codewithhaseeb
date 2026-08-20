import { useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { IconSearch, IconArrowRight, IconPlayStore } from "./Icons";
import { projects, categories } from "../data/projects";
import playStoreBadge from "../assets/google-play.png";

export default function Portfolio({ onSelectProject, onViewAll }) {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter(
          (p) => p.category === filter || p.tags.includes(filter),
        );

        
  function IconPlayStore() {
    return (
      <svg
        viewBox="0 0 24 24"
        width="15"
        height="15"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M3.5 2.7c-.3.3-.5.8-.5 1.4v15.8c0 .6.2 1.1.5 1.4L13.2 12 3.5 2.7z" />
        <path d="M14.1 12.9 5.2 21.4c.3.1.7.1 1.1-.1l10.4-5.9-2.6-2.5z" />
        <path d="M16.7 8.6 6.3 2.7c-.4-.2-.8-.2-1.1-.1l8.9 8.5 2.6-2.5z" />
        <path d="m18 9.3-2.8 1.6L12.6 12l2.6 2.5 2.8 1.6 2.8-1.6c.8-.5.8-1.6 0-2.1L18 9.3z" />
      </svg>
    );
  }

  return (
    <section id="portfolio" className="section">
      <div className="wrap">
        <SectionTitle watermark="WORKS">
          MY <span>PORTFOLIO</span>
        </SectionTitle>

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

        {/* <div className="gallery-grid">
          {visible.map((project, i) => (
            <Reveal
              as="button"
              key={project.id}
              index={i}
              className="gallery-item"
              type="button"
              onClick={() => onSelectProject(project.id)}
              aria-label={`View ${project.title}`}
            >
              <div className="ph">
                <img src={project.image} alt="" loading="lazy" />
              </div>

              <div className="gallery-caption">
                {project.title}
                <small>{project.company}</small>
              </div>

              <div className="overlay">
                <IconSearch />
              </div>
            </Reveal>
          ))}
        </div> */}

        <div className="gallery-grid">
          {visible.map((project, i) => (
            <Reveal
              as="button"
              key={project.id}
              index={i}
              className="gallery-item"
              type="button"
              onClick={() => onSelectProject(project.id)}
              aria-label={`View ${project.title}`}
            >
              <div className="ph">
                <img src={project.image} alt="" loading="lazy" />
                <div className="overlay">
                  <IconSearch />
                </div>
              </div>

              <div className="gallery-caption">
                <span className="gallery-title">{project.title}</span>
                <small>{project.company}</small>

                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    className="play-badge"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                   <img src={playStoreBadge} alt="Get it on Google Play" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="portfolio-more">
          <button type="button" className="btn-outline" onClick={onViewAll}>
            View All Projects
            <IconArrowRight />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
