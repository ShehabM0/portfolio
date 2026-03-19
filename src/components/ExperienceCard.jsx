import "./ExperienceCard.css";

export default function ExperienceCard({ item, idx }) {
  return (
    <div className="exp-card" key={idx}>

      <div className="exp-left">
        <div>
          <img className="icon" src={item.logo} />
          <br/>
          <span className="exp-period">{item.period}</span>
        </div>
        <span className="exp-index">0{idx + 1}</span>
      </div>

      <div className="exp-divider" />

      <div className="exp-right">
        <p className="exp-title">{item.title}</p>
        <p className="exp-company">{item.company}</p>
        <ul className="exp-bullets">
          {item.bullets.map((b, j) => (
            <li key={j}>{b}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}