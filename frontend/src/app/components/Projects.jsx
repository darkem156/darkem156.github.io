import React, { Component } from "react";

class Projects extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {}
  }

  async getProjects()
  {
    const resp = await fetch("http://darkem.herokuapp.com/api/projects", 
    {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    const res = await resp.json()
    .then(data => this.setState({ projects: data }))
  }

  componentDidMount()
  {
    this.getProjects();
  }

  render()
  {
    let projects;
    if(this.state.projects)
    {
      projects = this.state.projects.map(project =>
        <div className="project">
          <p className="project-name">{ project.name }</p>
          <p className="project-desc">{ project.description }</p>
          <p className="project-tech">{ project.technologies.map(technology =>
            <div className="project-technology">
              <p>{ technology }</p>
            </div>
          ) }</p>
          <div className="project-background">
          </div>
          <div className="project-background links">
            { project.deploy && <a className="deploy" href={ project.deploy }>Visit Web</a> }
            <a className="github" href={ project.github }>View Code</a>
          </div>
        </div>
      )
    }
    return (
      <div id="projects-container" className="section">
        <h3 className="section-title">Personal Projects</h3>
        <div id="projects">
          { projects }
        </div>
      </div>
    )
  }
}

export default Projects;
