import heroImg from "../assets/haseeb-mughal-image.jpeg";
import { IconArrowRight } from "./Icons";

export default function Hero({ onViewProjects }) {
  return (
    <section id="hero">
      <div className="wrap hero-inner">
        <div className="hero-photo-wrap">
          <div className="hero-photo-frame" />
          <div className="hero-photo">
            <img src={heroImg} alt="Haseeb Mughal" />
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
        </div>
      </div>
    </section>
  );
}
