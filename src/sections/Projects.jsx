import "./Projects.css";

import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Hospital Management System",
    description: "Graduation project — a full-stack web platform for managing patients, doctors, appointments, and medical records with role-based access control.",
    stack: [
      "python",
      "django",
      "postgresql",
      "redis",
      "websocket",
      "docker",
      "render",
      "android",
    ],
    repo: "https://github.com/ShehabM0/HealthCare",
  },

  {
    title: "PassKey+",
    description: "A modern, secure, and lightweight password management application implemented using dual API architecture, supporting both REST and GraphQL.",
    stack: [
      "typescript",
      "reactnative",
      "nodejs",
      "postgresql",
      "graphql",
      "redis",
      "docker",
      "flyio",
    ],
    repo: "https://github.com/ShehabM0/PassKey",
  },

  {
    title: "eCommerce API",
    description: "A RESTful API for an eCommerce platform specializing in paintings and artwork. This API provides user authentication, product management, shopping cart functionality, purchase processing, and review system with role-based access control.",
    stack: [
      "javascript",
      "nodejs",
      "express",
      "mongodb",
    ],
    repo: "https://github.com/ShehabM0/eCommerce-api",
  },

  {
    title: "CuppaCart",
    description: "A modern, full-featured mobile e-commerce application for coffee shop enthusiasts.",
    stack: [
      "javascript",
      "reactnative",
      "expo",
      "firebase",
    ],
    repo: "https://github.com/ShehabM0/CuppaCart",
  },

  {
    title: "eBlog",
    description: "A fully-featured e-blog built with Laravel, Blade templating, CSS, and JavaScript.",
    stack: [
      "php",
      "laravel",
      "mysql",
      "javascript",
      "html",
      "css",
    ],
    repo: "https://github.com/ShehabM0/eBlog",
  },

  {
    title: "Capture The Flag",
    description: "A 2D Capture the Flag game built with Java and OpenGL (JOGL). Features multiplayer gameplay with two teams competing to capture the opposing team's flag while defending their own, implemented using real-time graphics rendering and game mechanics.",
    stack: [
      "java",
      "opengl",
    ],
    repo: "https://github.com/ShehabM0/Capture-the-flag",
  },

  {
    title: "Cryptography",
    description: "Implemented various Cryptography algorithms with a detailed mathematical explanations for each cryptographic algorithm.",
    stack: [
      "java",
    ],
    repo: "https://github.com/ShehabM0/Cryptography",
  },

  {
    title: "Mini Java Compiler",
    description: "Sytax Compiler using Antlr3 and AST (Abstract Syntex Tree) Generation for a simplified compiler for a limited set of features of Java programming language.",
    stack: [
      "java",
      "antlr",
    ],
    repo: "https://github.com/ShehabM0/Mini-Java-Compiler",
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