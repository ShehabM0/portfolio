import "./Footer.css";

import LinkedinLogo from "../assets/social/linkedin-w.svg"
import GithubLogo from "../assets/social/github-w.svg"
import MailLogo from "../assets/social/mail-w.svg"

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

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-name">Shehab</span>
            <span className="footer-role"> | </span>
            <span className="footer-role">Software Developer</span>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} Shehab. All rights reserved.
          </span>

          <div className="footer-socials">
            {links.map((l) => (
              <a className="footer-social-link" href={l.href} target="_blank" >
                <img src={l.icon} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}