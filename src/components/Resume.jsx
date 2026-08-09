import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { experience, education } from "../data/resume";

function Timeline({ title, items, index }) {
  return (
    <Reveal index={index}>
      <div className="ee-col-title">{title}</div>
      <div className="ee-timeline">
        {items.map((item) => (
          <div className="ee-item" key={item.role + item.date}>
            <div className="ee-date">{item.date}</div>
            <div className="ee-role">{item.role}</div>
            <div className="ee-org">{item.org}</div>
            <div className="ee-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="section section--alt">
      <div className="wrap">
        <SectionTitle watermark="RESUME">
          EXPERIENCE &amp; <span>EDUCATION</span>
        </SectionTitle>

        <div className="ee-grid">
          <Timeline title="Work Experience" items={experience} index={0} />
          <Timeline title="Education" items={education} index={1} />
        </div>
      </div>
    </section>
  );
}
