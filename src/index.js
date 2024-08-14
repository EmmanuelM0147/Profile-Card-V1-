import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
    emoji: "💪🏽",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#EFD81D",
    emoji: "💪🏽",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
    emoji: "💪🏽",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
    emoji: "👍🏽",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
    emoji: "💪🏽",
  },
  {
    skill: "Node",
    level: "beginner",
    color: "#FF3B00",
    emoji: "👶🏽",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="nuel.jpeg"
      height="365px"
      width="442px"
      alt="Emmanuel Okeowo"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Emmanuel Okeowo</h1>
      <p>
        Full stack developer who is a dedicated, responsible, and
        detail-oriented software engineer. When not coding, I enjoy playing
        board games and basketball or enjoy the sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶🏽"}
        {level === "intermediate" && "👍🏽"}
        {level === "advanced" && "💪🏽"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
