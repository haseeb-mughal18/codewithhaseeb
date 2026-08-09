import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/resume";

/** Ring fills from 0 to its target once the grid scrolls into view. */
function SkillRing({ name, pct, active }) {
  return (
    <div className="skill-ring-wrap">
      <div className="skill-ring" style={{ "--pct": active ? pct : 0 }}>
        <span className="pct">{pct}%</span>
      </div>
      <div className="skill-name">{name}</div>
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
            <SkillRing key={skill.name} {...skill} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
