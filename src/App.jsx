import TerminalLogo from "./assets/terminal.svg"
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

      {/* About */}
      <div className="section-title">
        About me
      </div>

      {/* Terminal */}
      <div className="terminal">
        <div className="terminal-header">
          <div>
            <img className="terminal-icon" src={TerminalLogo} />
          </div>
          <div>
            <span className="terminal-title">shehab@portfolio:~</span>
          </div>
          <div> </div>
        </div>

        <div className="terminal-body">
          <p><span className="prompt">$</span> whoami</p>
          <p>→ Shehab, a Computer Science graduate from Cairo University in 2024</p>

          <br></br>

          <p><span className="prompt">$</span> cat graduation.txt</p>
          <p>
            ✓ Bachelor of Computer Science Cairo University <br/>
            ✓ Graduation Project: Hospital Management System (Excellent with Honors) <br/>
            ✓ Graduated with Very Good with Honors
          </p>

          <br></br>

          <p><span className="prompt">$</span> bash military.sh</p>
          <p>
            Military status is <span style={{color: "green"}}>completed</span>
          </p>

          <br></br>
          
          <p>
            <span className="prompt">$</span> 
            <span className="terminal-cursor" />
          </p>
        </div>
      </div>

    </main>
  );
}
