export default function About() {
  return (
    <section id="about">
      <div class="about-text">
        <div class="section-header fade-in">
          {/* <span class="section-num">04</span> */}
          <h2 class="section-title">About Me</h2>
        </div>
        <p class="about-body fade-in">
          I'm a mobile engineer specializing in <strong>React Native</strong>{" "}
          and <strong>Android (Kotlin)</strong> — with the rare ability to work
          fluently across both worlds. I started with native Android, which
          gives me a deep understanding of the platform internals that makes me
          a better React Native developer.
        </p>
        <p class="about-body fade-in">
          I care deeply about{" "}
          <strong>app performance, smooth animations</strong>, and writing
          maintainable, testable code. I believe mobile apps should feel like
          they belong on the platform — fast, fluid, and native-feeling —
          regardless of whether they're built with JavaScript or Kotlin.
        </p>
        <div class="about-highlights fade-in">
          <div class="highlight">
            <strong>Location</strong>Karachi, Pakistan
          </div>
          <div class="highlight">
            <strong>Languages</strong>JSX/TSX, Kotlin, Java
          </div>
          <div class="highlight">
            <strong>Availability</strong>Open to opportunities
          </div>
          <div class="highlight">
            <strong>Work Style</strong>Remote / Hybrid / On-site
          </div>
        </div>
      </div>

      <div className="about-visual fade-in">
        <div class="about-card">
          <div class="about-card-header">Proficiency Levels</div>

          <div className="skill-bar-item">
            <div class="skill-bar-label">
              <span>React Native</span>
              <span>95%</span>
            </div>
            <div class="skill-bar-track">
              <div className="skill-bar-fill" style={{ width: "95%" }}></div>
            </div>
          </div>
          <div className="skill-bar-item">
            <div class="skill-bar-label">
              <span>TypeScript</span>
              <span>90%</span>
            </div>
            <div class="skill-bar-track">
              <div className="skill-bar-fill" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skill-bar-item">
            <div class="skill-bar-label">
              <span>Kotlin / Android</span>
              <span>85%</span>
            </div>
            <div class="skill-bar-track">
              <div
                className="skill-bar-fill purple"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div className="skill-bar-item">
            <div class="skill-bar-label">
              <span>Jetpack Compose</span>
              <span>80%</span>
            </div>
            <div class="skill-bar-track">
              <div
                className="skill-bar-fill purple"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="skill-bar-item">
            <div class="skill-bar-label">
              <span>React Native Reanimated</span>
              <span>88%</span>
            </div>
            <div class="skill-bar-track">
              <div className="skill-bar-fill" style={{ width: "88%" }}></div>
            </div>
          </div>
          <div className="skill-bar-item">
            <div class="skill-bar-label">
              <span>Firebase / Cloud</span>
              <span>82%</span>
            </div>
            <div class="skill-bar-track">
              <div
                className="skill-bar-fill orange"
                style={{ width: "82%" }}
              ></div>
            </div>
          </div>
          <div className="skill-bar-item">
            <div class="skill-bar-label">
              <span>CI/CD & DevOps</span>
              <span>75%</span>
            </div>
            <div class="skill-bar-track">
              <div
                className="skill-bar-fill orange"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
