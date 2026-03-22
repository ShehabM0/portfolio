import "./ProjectCard.css";

import ArrowLogo from "../assets/icons/arrow.svg"

const icons = {
  react:      { title: "React",       path: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.096-.278zm-.forced AAC tabindex" },
};

const Icon = ({ title, path }) => (
  <svg className="tech-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label={title}>
    <title>{title}</title>
    <path d={path} />
  </svg>
);

export default function ProjectCard({ item, idx }) {
  return (
    <div className="proj-card" key={idx}>

      <div className="proj-top">
        <div className="proj-meta">
          <span className="proj-year">{item.year}</span>
          <span className="proj-num">0{idx + 1}</span>
        </div>
        <h3 className="proj-title">{item.title}</h3>
        <p className="proj-desc">{item.description}</p>
      </div>

      <div className="proj-bottom">
        <div className="proj-icons">
          {item.stack.map((key) =>
            icons[key] ? (
              <Icon key={key} title={icons[key].title} path={icons[key].path} />
            ) : null
          )}
        </div>

        <a
          className="proj-link"
          href={item.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${item.title} repository`}
        >
          View on GitHub
          <img src={ArrowLogo} />
        </a>
      </div>

    </div>
  );
}
