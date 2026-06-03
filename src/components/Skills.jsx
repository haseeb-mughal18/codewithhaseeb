
import {
  FaReact,
  FaJs,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaMobileAlt,
  FaLaptop,
} from "react-icons/fa";

import {
  SiKotlin,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiExpo,
  SiAndroidstudio,
} from "react-icons/si";

export default function Skills() {
  const specializedSkills = [
    { icon: <FaReact />, name: "React Native", accent: "#61DAFB" },
    { icon: <FaReact />, name: "React.js", accent: "#61DAFB" },
    { icon: <FaJs />, name: "JavaScript", accent: "#F7DF1E" },
    { icon: <FaJava />, name: "Java", accent: "#EA2D2E" },
    { icon: <SiKotlin />, name: "Kotlin", accent: "#7F52FF" },
    { icon: <SiAndroidstudio />, name: "Android Studio", accent: "#3DDC84" },
    { icon: <SiRedux />, name: "Redux", accent: "#764ABC" },
    { icon: <SiFirebase />, name: "Firebase", accent: "#FFCA28" },
    { icon: <SiMongodb />, name: "MongoDB", accent: "#47A248" },
    { icon: <SiExpo />, name: "Expo & CLI", accent: "#000000" },
    { icon: <FaGitAlt />, name: "REST API Integration", accent: "#00C2FF" },
    { icon: <FaNodeJs />, name: "Node.js", accent: "#68A063" },
    { icon: <FaMobileAlt />, name: "Mobile Development", accent: "#00E5A0" },
    { icon: <FaLaptop />, name: "Frontend Development", accent: "#7C5CFC" },
    { icon: <FaGitAlt />, name: "Git & Version Control", accent: "#F05032" },
  ];

  return (
    <section id="skills">
      <div className="section-header">
        {/* <span className="section-num">01 </span> */}
        <h2 className="section-title">Technical Expertise</h2>
        <div className="section-line"></div>
      </div>

      <div className="skills-grid">
        {specializedSkills.map((skill, i) => (
          <div
            key={i}
            className="skill-card"
            style={{ "--accent-card": skill.accent }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}