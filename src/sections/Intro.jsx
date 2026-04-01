import { useEffect, useState } from "react"
import "./Intro.css"

import LinkedinLogo from "../assets/social/linkedin.svg"
import GithubLogo from "../assets/social/github.svg"
import MailLogo from "../assets/social/mail.svg"

const introText =
  "Backend engineer who enjoys building reliable systems and turning ideas into real products expressing them through mobile applications and web platforms";

const links = [
  {
    href: "mailto:shehabmohamed2357@gmail.com",
    icon: MailLogo
  },

  {
    href: "https://github.com/ShehabM0",
    icon: GithubLogo
  },

  {
    href: "https://www.linkedin.com/in/shehab-mohamed-4284b8249/",
    icon: LinkedinLogo
  },
];

export default function Intro({ phase, setPhase }) {
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
          setPhase("terminal");
        }
      }, 30);
      return () => clearInterval(typing);
    }, 600);
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
    {/* Intro */}
    <h1 className="title">Software Development Engineer</h1>
    <p className="typewriter">
      {displayIntroText}
      <span className={`cursor ${introTextDone ? "cursor-done" : ""}`} />
    </p>

    {/* Icons */}
    <div className="icons">
      {links.map((l) => (
        <a className="link" href={l.href} target="_blank" >
          <img src={l.icon} />
        </a>
      ))}
    </div>
    </>
  );
}
