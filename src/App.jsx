import TerminalLogo from "./assets/terminal.svg"
import LinkedinLogo from "./assets/linkedin.svg"
import GithubLogo from "./assets/github.svg"
import MailLogo from "./assets/mail.svg"

import { useEffect, useState } from "react"
import "./App.css"

const introText =
  "Backend engineer who enjoys building reliable systems and turning ideas into real products expressing them through mobile applications and web platforms";

const commands = [
  {
    cmd: "whoami",
    output: [
      "→ Shehab, a Computer Science graduate from Cairo University in 2024"
    ],
  },
  {
    cmd: "cat education.txt",
    output: [
      "✓ Bachelor of Computer Science Cairo University",
      "✓ Graduation Project: Hospital Management System (Excellent with Honors)",
      "✓ Graduated with Very Good with Honors",
    ],
  },
  {
    cmd: "bash military.sh",
    output: [
      "Military status is completed"
    ],
  },
];

export default function App() {
  const [displayIntroText, setDisplayIntroText] = useState("");
  const [introTextDone, setIntroTextDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const typing = setInterval(() => {
        setDisplayIntroText(introText.slice(0, i));
        i++;
        if (i > introText.length) {
          clearInterval(typing);
          setIntroTextDone(true);
        }
      }, 30);
      return () => clearInterval(typing);
    }, 600);
    return () => clearTimeout(delay);
  }, []);

  const [history, setHistory] = useState([]);
  const [currentCmd, setCurrentCmd] = useState("");
  const [cmdIndex, setCmdIndex] = useState(0);
  useEffect(() => {
    if (!introTextDone) return;
    if (cmdIndex >= commands.length) return;

    const command = commands[cmdIndex].cmd;
    let i = 0;

    const typing = setInterval(() => {
      setCurrentCmd(command.slice(0, i));
      i++;

      if (i > command.length) {
        clearInterval(typing);

        setTimeout(() => {
          setHistory((prev) => [
            ...prev,
            {
              cmd: command,
              output: commands[cmdIndex].output,
            },
          ]);

          setCurrentCmd("");
          setCmdIndex((prev) => prev + 1);
        }, 500);
      }
    }, 40);

    return () => clearInterval(typing);
  }, [cmdIndex, introTextDone]);

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
        {displayIntroText}
        <span className={`cursor ${introTextDone ? "cursor-done" : ""}`} />
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
          {history.map((item, i) => (
            <div key={i}>
              <p>
                <span className="prompt">$</span> {item.cmd}
              </p>

              {item.output.map((line, j) => (
                <p key={j} className="terminal-output">
                  {line}
                </p>
              ))}
            </div>
          ))}

          <p>
            <span className="prompt">$</span> {currentCmd}
            <span className={`terminal-cursor ${!introTextDone || cmdIndex >= commands.length ? "cursor-done" : ""}`}/>
          </p>
        </div>
      </div>

    </main>
  );
}
