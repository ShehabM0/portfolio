import "./CourseCard.css";

import CertificateIcon from "../assets/icons/certificate.svg"

export default function CourseCard({ item, idx }) {
  return (
    <div className="course-card" key={idx}>

      <div className="course-thumb-wrap">
        <img
          className="course-thumb"
          src={item.thumb}
          alt={item.title}
          loading="lazy"
        />
        <span className="course-platform-badge">{item.platform}</span>
      </div>

      <div className="course-info">
        <p className="course-title">{item.title}</p>
        <p className="course-instructor">{item.instructor}</p>
        <p className="course-desc">{item.description}</p>

        <a
          className="course-cert-btn"
          href={item.cert}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="tech-icon" src={CertificateIcon} />
          View Certificate
        </a>
      </div>

    </div>
  );
}