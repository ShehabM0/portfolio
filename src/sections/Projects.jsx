import "./Projects.css";

import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Hospital Management System",
    description: "Graduation project — a full-stack web platform for managing patients, doctors, appointments, and medical records with role-based access control.",
    stack: ["react"],
    repo: "https://github.com/shehab",
    year: "2022",
  },
];

export default function Projects() {
  return (
    <section className="proj-section">
      <div className="section-title">Projects</div>

      <div className="proj-list">
        {projects.map((proj, i) => (
          <ProjectCard item={proj} idx={i} />
        ))}
      </div>
    </section>
  );
}