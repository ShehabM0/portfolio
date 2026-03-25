import "./ScriptCard.css";

import GithubLogo from "../assets/social/github.svg"

export default function ScriptCard({ item, idx }) {
  const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );

  return (
    <a
      key={idx}
      className="script-card"
      href={item.repo}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="script-card-top">
        <div className="script-lang-cont">
          <img className="script-lang-icon" src={item.logo} />
          <span className="script-lang">{item.lang}</span>
        </div>
        <span className="script-arrow"><ArrowIcon /></span>
      </div>

      <div className="script-card-body">
        <p className="script-title">{item.title}</p>
        <p className="script-desc">{item.description}</p>
      </div>

      <div className="script-card-footer">
        <img className="icon" src={GithubLogo} />
        <span>View on GitHub</span>
      </div>
    </a>
  );
}