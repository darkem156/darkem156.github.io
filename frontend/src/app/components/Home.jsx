import React, { Component } from "react";
import Projects from "./Projects";
import Technologies from "./Technologies";

class Home extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {}
  }

  componentDidMount() { document.title = "Home" }
  componentDidUpdate() { document.title = "Home" }

  render()
  {
    return (
      <div>
        <div id="presentation-container" className="section">
          <div id="presentation">
            <div id="titles">
              <h1 id="title">
                Hi. My name is Emmanuel, but you can call me Darkem.
              </h1>
             <h3 id="subtitle">Full-Stack JR Developer</h3>
            </div>
           <img id="me" width="100%" src="./assets/yo.png" />
          </div>
          <p id="description">
            I am a Mexican and Student Full-Stack Developer. I am 17-years-old and I have experiencie with Personal Projects in the Node JS Environment
          </p>
          <div id="cv-container"><a href="../assets/cv.pdf">Resume</a></div>
        </div>
        <Projects />
        <Technologies />
      </div>
    )
  }
}

export default Home;
