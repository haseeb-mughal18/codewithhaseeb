import heroImg from "../assets/MyImage.jpg";
import { IconArrowRight } from "./Icons";
import { badgeFor } from "../data/skillBadges";

const HERO_TECH = [
  "React Native",
  "JavaScript",
  "TypeScript",
  "Kotlin",
  "Redux",
  "MongoDB",
  "Firebase",
  "Jetpack Compose",
  "REST APIs",
  "CI/CD",
  "Reanimated",
  "React.js",
];

export default function Hero({ onViewProjects }) {
  return (
    <section id="hero">
      <div className="wrap hero-inner">
        <div className="hero-photo-wrap">
          <div className="hero-dots" />
          <div className="hero-blob" />
          <div className="hero-photo-frame">
            <img src={heroImg} alt="Haseeb Mughal" />
          </div>

          <div className="code-card">
            <div className="code-head">
              &lt;/&gt; Code <span className="live-dot" />
            </div>
            <div>
              <span className="cl-key">const</span> developer ={" "}
              <span className="cl-punc">{"{"}</span>
            </div>
            <div>
              &nbsp;&nbsp;name: <span className="cl-str">'Haseeb'</span>,
            </div>
            <div>
              &nbsp;&nbsp;role: <span className="cl-str">'RN Developer'</span>,
            </div>
            <div>
              &nbsp;&nbsp;based: <span className="cl-str">'Karachi'</span>
            </div>
            <div>
              <span className="cl-punc">{"};"}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="hero-eyebrow">I'M HASEEB MUGHAL.</div>

          <h1 className="hero-role">
            React Native &amp;
            <br />
            Android Developer
          </h1>

          <p className="hero-desc">
            Mobile application developer building cross-platform apps with React
            Native CLI, Expo, Redux, and REST APIs. I deliver polished features
            for booking, productivity, marketplace, and wellness products —
            including apps published on the Google Play Store — bridging
            frontend UI, backend integration, and Android tuning.
          </p>

          <div className="hero-actions">
            <a href="#about" className="btn-yellow">
              More About Me
              <IconArrowRight />
            </a>

            <button
              type="button"
              className="btn-outline"
              onClick={onViewProjects}
            >
              View Projects
              <IconArrowRight />
            </button>
          </div>

          <div className="tech-strip-label">Technologies I Work With</div>
          <div className="tech-strip">
            {HERO_TECH.map((name) => {
              const { Icon, cls } = badgeFor(name);
              return (
                <div className={`tech-badge ${cls}`} key={name} title={name}>
                  <Icon />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
