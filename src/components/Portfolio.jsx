import { useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { IconSearch, IconArrowRight } from "./Icons";
import { projects, categories } from "../data/projects";

export default function Portfolio({ onSelectProject, onViewAll }) {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter(
          (p) => p.category === filter || p.tags.includes(filter)
        );

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
