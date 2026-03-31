import CourseCard from "../components/CourseCard";
import "./Courses.css";

const courses = [
  {
    title: "ECPC Qualification 2023",
    description: "Demonstrating strong problem-solving skills, data structures, algorithms, and competitive programming proficiency.",
    platform: "ECPC",
    cert: "https://drive.google.com/file/d/1mx8XhI0P3lOs6Ox5R_iqzySjC40Db4Om/view?usp=sharing",
    thumb: "ECPC",
  },

  {
    title: "ECPC Qualification 2024",
    description: "Demonstrating strong problem-solving skills, data structures, algorithms, and competitive programming proficiency.",
    platform: "ECPC",
    cert: "https://drive.google.com/file/d/1UsbQgvxfz6kEeafJWX5k-fip9RDoTc0a/view?usp=sharing",
    thumb: "ECPC",
  },

  {
    title: "Data Structures",
    description: "Comprehensive course covering core data structures such as arrays, linked lists, stacks, queues, trees, and graphs, with a focus on implementation and performance optimization for real-world applications.",
    platform: "UCSandDiego",
    instructor: "University of California San Diego",
    cert: "https://drive.google.com/file/d/1l1DrAlJvCmFL-GCXptN3vRoeFAnflx0h/view?usp=sharing",
    thumb: "Data Structures",
  },

  {
    title: "Algorithmic Toolbox",
    description: "Focused on fundamental algorithmic techniques including divide and conquer, greedy algorithms, and dynamic programming, with hands-on problem solving and efficient implementation practices.",
    platform: "UCSandDiego",
    instructor: "University of California San Diego",
    cert: "https://drive.google.com/file/d/1B--01h72MRCqI3Pl-_Ae-PeZunLDPoI_/view?usp=sharing",
    thumb: "Algorithms",
  },

  {
    title: "Mastering critical SKILLS in Algorithms Part 1",
    description: "Intensive algorithms course focused on building strong problem-solving skills through hands-on practice, covering recursion, complexity analysis, sorting, binary search, and graph traversal techniques.",
    platform: "CSkilled Academy",
    instructor: "Dr. Moustafa Saad",
    cert: "https://drive.google.com/file/d/1B--01h72MRCqI3Pl-_Ae-PeZunLDPoI_/view?usp=sharing",
    thumb: "Algorithms I",
  },

  {
    title: "Mastering critical SKILLS in Algorithms Part 2",
    description: "Advanced algorithms course focused on mastering problem-solving through intensive practice, covering dynamic programming, backtracking, shortest path algorithms, and minimum spanning trees.",
    platform: "CSkilled Academy",
    instructor: "Dr. Moustafa Saad",
    cert: "https://drive.google.com/file/d/1AhnMTy-LUz4RMT0Pvn-JIplMettjNaiL/view?usp=sharing",
    thumb: "Algorithms II",
  },

  {
    title: "Back-End Development",
    description: "Intensive 35-hour backend course focused on building scalable APIs using modern technologies, including database design, authentication, and server-side architecture.",
    platform: "180-Degree",
    instructor: "Eng. Ziad Khaled",
    cert: "https://drive.google.com/file/d/16scUqQFBisGtwgFxPBYPvXMdG8FB3F69/view?usp=sharing",
    thumb: "Back End Development",
  },

  {
    title: "Git & GitHub Bootcamp",
    description: "Version control fundamentals, branching strategies, rebasing, resolving conflicts, and team workflows.",
    platform: "Udemy",
    instructor: "Amigoscode",
    cert: "https://drive.google.com/file/d/1u3nWX6aZuhFmkZUG5WqEAYqkKbCSazrX/view?usp=drive_link",
    thumb: "Git",
  },
];

export default function Courses() {
  return (
    <section className="courses-section">
      <div className="section-title">Courses</div>

      <div className="courses-grid">
        {courses.map((c, i) => (
          <CourseCard item={c} idx={i} />
        ))}
      </div>
    </section>
  );
}