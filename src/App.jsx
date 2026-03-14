import LinkedinLogo from "./assets/linkedin.svg"
import GithubLogo from "./assets/github.svg"
import MailLogo from "./assets/mail.svg"

import { useEffect, useState } from "react"
import "./App.css"

const text =
  "Backend engineer who enjoys building reliable systems and turning ideas into real products expressing them through mobile applications and web platforms";

export default function App() {
  const [displayText, setDisplayText] = useState("");
  const [done, setDone] = useState(false);
 
  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const typing = setInterval(() => {
        setDisplayText(text.slice(0, i));
        i++;
        if (i > text.length) {
          clearInterval(typing);
          setDone(true);
        }
      }, 30);
      return () => clearInterval(typing);
    }, 600);
    return () => clearTimeout(delay);
  }, []);

  return (
    <main className="main">

      {/* Badge */}
      <div className="badge">
        <span className="badge-dot" />
        available for work
      </div>

      {/* Intro */}
      <h1 className="title">Software Development Engineer</h1>
      <p className="typewriter">
        {displayText}
        <span className={`cursor ${done ? "cursor-done" : ""}`} />
      </p>

      {/* Icons */}
      <div className="icons">
        <a className="link" href="mailto:shehabmohamed2357@gmail.com" target="_blank" >
          <img className="icon" src={MailLogo} />
        </a>
        <a className="link" href="https://github.com/ShehabM0" target="_blank" >
          <img className="icon" src={GithubLogo} />
        </a>
        <a className="link" href="https://www.linkedin.com/in/shehab-mohamed-4284b8249/" target="_blank" >
          <img className="icon" src={LinkedinLogo} />
        </a>
      </div>

    </main>
  );
}
