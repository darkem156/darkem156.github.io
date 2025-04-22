import '../css/Experience.css'

const experience = [
  {
    date: "2024 - Present",
    title: "Full Stack Developer",
    description: "Description of my workDescription of my workDescription of my workDescription of my workDescription of my work",
    company: "Ken Duit Productions",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
    ]
  },
  {
    date: "2023 - Present",
    title: "Full Stack Developer",
    description: "Description of my workDescription of my workDescription of my workDescription of my workDescription of my work",
    company: "Ken Duit Productions",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
    ]
  },
  {
    date: "2022 - Present",
    title: "Full Stack Developer",
    description: "Description of my workDescription of my workDescription of my workDescription of my workDescription of my work",
    company: "Ken Duit Productions",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
    ]
  },
  {
    date: "2021 - Present",
    title: "Full Stack Developer",
    description: "Description of my workDescription of my workDescription of my workDescription of my workDescription of my work",
    company: "Ken Duit Productions",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
    ]
  },
].reverse()

export default function Experience() {
  return (
    <section id="experience">
      {
        experience.map((exp, index) => (
          <article className="experience" key={index}>
            <div>
              <p>{exp.date}</p>
              <div>
                <div>
                  <h3>{exp.title}</h3>
                  <b>·</b>
                  <h4>{exp.company}</h4>
                </div>
                <p>{exp.description}</p>
                <div>
                  {
                    exp.technologies.map((tech, index) => (
                      <span key={index} className="tag">{tech}</span>
                    ))
                  }
                </div>
              </div>
            </div>
          </article>
        ))
      }
    </section>
  )
}