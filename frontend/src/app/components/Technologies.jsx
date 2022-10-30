import React, { Component } from "react";

class Technologies extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      technologies: [
        "JavaScript",
        "Node.js", 
        "Vue.js",
        "React",
        "Express.js",
        "Git",
        "Docker",
        "MySQL",
        "Jest",
        "GitHub Actions",
        "HTML5",
        "CSS3"
      ]
    }
  }

  render()
  {
    const technologies = this.state.technologies.map(technology =>
      <div className="technology">
        <p>{ technology }</p>
        <img src={ `../assets/technologies/${ technology }.png`} />
      </div>
    )

    return (
      <div id="technologies-container" className="section">
        <h3 className="section-title">Technologies</h3>
        <div id="technologies" >
          { technologies }
        </div>
      </div>
    )
  }
}

export default Technologies;
