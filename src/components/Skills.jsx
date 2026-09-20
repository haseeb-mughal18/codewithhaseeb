import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/resume";
import { badgeFor } from "../data/skillBadges";

/** Bar fills from 0 to its target once the grid scrolls into view. */
function SkillBar({ name, pct, active }) {
  const { Icon, cls } = badgeFor(name);
  return (
    <div className="skill-cell">
      <div className="skill-top">
        <span className={`skill-badge ${cls}`}>
          <Icon />
        </span>
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: active ? `${pct}%` : 0 }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const gridRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionTitle watermark="SKILLS">
          MY <span>SKILLS</span>
        </SectionTitle>

        <div className="skills-grid" ref={gridRef}>
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
