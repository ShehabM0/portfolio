import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import About from "./sections/About"
import Intro from "./sections/Intro"
import { useState } from "react"
import "./App.css"

export default function App() {
  const [phase, setPhase] = useState("intro");

  return (
    <main className="main">
      {/* Badge */}
      <div className="badge">
        <span className="badge-dot" />
        available for work
      </div>

      <Intro phase={phase} setPhase={setPhase}/>
      <About phase={phase}/>

      <Experience />

      <Projects />
    </main>
  );
}
