import ScriptCard from "../components/ScriptCard";
import "./Scripts.css";

const scripts = [
  {
    title: "Linux environment",
    description: " Configuration files and scripts for my linux development environment.",
    logo: "linux",
    lang: "Linux",
    repo: "https://github.com/shehab/dotfiles",
  },

  {
    title: "buildcpp.sh",
    description: "Bash script that optimizes C++ workflow by diff-checking source files, avoiding unnecessary recompilation, and running the binary.",
    logo: "bash",
    lang: "Bash",
    repo: "https://github.com/ShehabM0/dotfiles/blob/master/scripts/buildcpp.sh",
  },

  {
    title: "dir-cleaner.sh",
    description: "Bash script that scans a directory and removes unwanted files, including extensionless files and temporary files.",
    logo: "bash",
    lang: "Bash",
    repo: "https://github.com/ShehabM0/dotfiles/blob/master/scripts/clean_cpp.sh",
  },

  {
    title: "subtitle-burner.sh",
    description: "Bash script that merges subtitle into video files using FFmpeg with CPU/GPU acceleration with custom styling.",
    logo: "bash",
    lang: "Bash",
    repo: "https://github.com/ShehabM0/dotfiles/blob/master/scripts/subtitle_merge.sh",
  },

  {
    title: "vim-config",
    description: "Custom Vim configuration focused on efficient navigation, clean UI, and enhanced development workflow with plugins and smart keybindings.",
    logo: "vim",
    lang: "VIM",
    repo: "https://github.com/ShehabM0/dotfiles/blob/master/.vimrc",
  },
];

export default function Scripts() {
  return (
    <section className="scripts-section">
      <div className="section-title">Scripts</div>

      <div className="scripts-grid">
        {scripts.map((s, i) => (
          <ScriptCard item={s} idx={i} />
        ))}
      </div>
    </section>
  );
}