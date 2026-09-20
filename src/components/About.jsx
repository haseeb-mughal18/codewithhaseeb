import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { IconDownload, IconCalendar, IconLayers, IconSmartphone, IconHeart } from "./Icons";
import { personalInfo, stats } from "../data/resume";

const STAT_ICONS = [IconCalendar, IconLayers, IconSmartphone, IconHeart];

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
                <span>haseebmughal18.github.io/codewithhaseeb</span>
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
            {stats.map((stat, i) => {
              const Icon = STAT_ICONS[i % STAT_ICONS.length];
              return (
                <div className="stat-box" key={stat.lbl}>
                  <div className="stat-icon">
                    <Icon />
                  </div>
                  <div className="num">{stat.num}</div>
                  <div className="lbl">{stat.lbl}</div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
