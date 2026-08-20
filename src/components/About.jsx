import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { IconDownload } from "./Icons";
import { personalInfo, stats } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="wrap">
        <SectionTitle watermark="RESUME">
          ABOUT <span>ME</span>
        </SectionTitle>

        <div className="about-grid">
          <Reveal>
            <div className="info-title">Personal Infos</div>

            <div className="info-list">
              {personalInfo.map((item) => (
                <div className="info-item" key={item.label}>
                  <b>{item.label}</b>
                  <span>{item.value}</span>
                </div>
              ))}
              <div className="info-item">
                <b>Website</b>
                <span>haseebmughal18.github.io</span>
              </div>
            </div>

            <a
              className="btn-yellow"
              href={`${import.meta.env.BASE_URL}Haseeb-Mughal-Resume.pdf`}
              download="Haseeb-Mughal-Resume.pdf"
            >
              Download CV
              <IconDownload />
            </a>
          </Reveal>

          <Reveal className="stats-grid" index={1}>
            {stats.map((stat) => (
              <div className="stat-box" key={stat.lbl}>
                <div className="num">{stat.num}</div>
                <div className="lbl">{stat.lbl}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
