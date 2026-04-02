import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Scripts from "./sections/Scripts"
import Courses from "./sections/Courses"
import Header from "./sections/Header"
import Footer from "./sections/Footer"
import About from "./sections/About"
import Intro from "./sections/Intro"
import { useState } from "react"
import "./App.css"

export default function App() {
  const [phase, setPhase] = useState("intro");

  return (
    <main className="main">
      <Header />
      <Intro phase={phase} setPhase={setPhase}/>
      <About phase={phase}/>
      <Experience />
      <Projects />
      <Scripts />
      <Courses />
      <Footer />
    </main>
  );
}
