export default function Hero({ onViewProjects }) {
  return (
    <section id="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-orb orb1"></div>
      <div className="hero-orb orb2"></div>
      <div className="hero-orb orb3"></div>
      <div className="hero-main">
        <div className="hero-left">
          <h1 className="hero-name">
            HASEEB <br />
            <span className="line2">MUGHAL</span>
          </h1>

          <div className="hero-title">
            React Native Developer • Android / Kotlin Engineer • Mobile
            Specialist
          </div>
        </div>

        <div className="hero-right">
          <p className="hero-desc">
            Building performant, pixel-perfect mobile experiences with React
            Native and native Kotlin. Experienced in delivering scalable
            applications with modern architectures, seamless user experiences,
            and production-ready solutions.
          </p>

          {/* <div className="hero-ctas">
            <button className="btn-primary">View Projects</button>
            <button className="btn-ghost">Get In Touch</button>
          </div> */}
          <div className="hero-ctas">
            <button className="btn-primary" onClick={onViewProjects}>
              View Projects
            </button>
            <button className="btn-ghost">Get In Touch</button>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">5+</div>
          <div className="stat-label">Apps Built</div>
        </div>
      </div>
    </section>
  );
}
