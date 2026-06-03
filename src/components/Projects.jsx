import pakthkedaarImg from "../assets/pakthekedaarImg.png";
import see from "../assets/see.png";
import reveloVoxImg from "../assets/reveloVoxImg.png";
export default function Projects() {
  const customProjects = [
    {
      title: "Pakthekedaar",
      desc: "A B2B marketplace for buying and selling construction materials items.",
      tags: ["React Native", "JavaScript"],
      link: "https://play.google.com/store/apps/details?id=com.pakthekedaar",
      image: pakthkedaarImg,
    },
    {
      title: "ReveloVox",
      desc: "An AI-powered voice assistant for user to check thier Stress levels and get personalized recommendations to improve mental well-being.",
      tags: ["React Native", "JavaScript", "Gemini", "Firebase"],
      link: "https://play.google.com/store/apps/details?id=com.stresschecker",
      image: reveloVoxImg,
    },
    {
      title: "See",
      desc: "An accessibility-focused Android application that helps users improve screen readability through smart font scaling, brightness optimization, dark mode controls, and personalized vision settings. Designed to reduce eye strain and provide a more comfortable viewing experience for users with visual challenges.",
      tags: ["Native Android", "Android SDK", "Kotlin","Jetpack Compose"],
      link: "https://play.google.com/store/apps/details?id=com.techadwiser.see",
      image: see,
    },
  ];

  return (
    <section id="projects">
      <div className="section-header">
        {/* <span className="section-num">02 </span> */}
        <h2 className="section-title">Recent Projects</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-grid">
        {customProjects.map((proj, i) => (
          <div key={i} className="project-card">
            <img src={proj.image} alt={proj.title} className="project-image" />

            <div className="project-tags">
              {proj.tags.map((tag, idx) => (
                <span key={idx} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
                View on Play Store &#8594;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
