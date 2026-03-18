import "./Experience.css";

import FreelanceLogo from "../assets/companies/freelance.svg"
import OrangeLogo from "../assets/companies/orange.svg"

const experiences = [
  {
    title: "Back End Engineer",
    company: "Orange Hackathon",
    logo: OrangeLogo,
    period: "Oct 2022 – Dec 2022",
    bullets: [
      "Selected as one of the top tech talents to participate in a 3-month intensive Back End challenges hosted by Orange Digital Center.",
      "Collaborated with a professional team to design and develop a Web application aimed at database design and optimizing data.",
      "Gained hands-on experience in agile methodology, rapid prototyping, and API Integration.",
    ],
  },
  {
    title: "Mobile Developer",
    company: "Freelance Remote Project",
    logo: FreelanceLogo,
    period: "Aug 2023 – Dec 2023",
    bullets: [
      "Built an advanced product customization workflow, enabling dynamic attributes, color variants, and size management with full edit/delete support.",
      "Developed seller and delivery workflows, including real-time delivery request and response notifications.",
      "Led major UI/UX improvements, including keyboard handling optimizations and persistent tap handling.",
      "Performed large-scale refactors across multiple files to improve maintainability and reduce unnecessary re-renders, significantly enhancing performance.",
      "Collaborated in a shared codebase by resolving merge conflicts, syncing feature branches, and maintaining code quality.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="exp-section">
      <div className="section-title">
        Experience
      </div>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div className="exp-card" key={i}>

            <div className="exp-left">
              <div>
                <img className="icon" src={exp.logo} />
                <br/>
                <span className="exp-period">{exp.period}</span>
              </div>
              <span className="exp-index">0{i + 1}</span>
            </div>

            <div className="exp-divider" />

            <div className="exp-right">
              <p className="exp-title">{exp.title}</p>
              <p className="exp-company">{exp.company}</p>
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}