import { useEffect, useState } from "react"
import "./About.css"

import TerminalLogo from "../assets/terminal.svg"

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
      <>Military status is <span className="green">completed</span></>
    ],
  },
];

export default function About({ phase }) {
  const [history, setHistory] = useState([]);
  const [currentCmd, setCurrentCmd] = useState("");
  const [cmdIndex, setCmdIndex] = useState(0);

  useEffect(() => {
    if(phase !== "terminal") return;
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
  }, [cmdIndex, phase]);

  return (
    <>
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
          <span className={`terminal-cursor ${phase === "intro" || cmdIndex >= commands.length ? "cursor-done" : ""}`}/>
        </p>
      </div>
    </div>
    </>
  );
}