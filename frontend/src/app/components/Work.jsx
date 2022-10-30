import React, { Component } from "react";

class Work extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {}
  }

  componentDidMount() { document.title = "Work" }
  componentDidUpdate() { document.title = "Work" }

  async getRepos()
  {
    const resp = await fetch("https://darkem.herokuapp.com/api/repos");
    const res = await resp.json();
    this.setState({ repos: res })
  }

  componentDidMount()
  {
    this.getRepos();
  }

  render()
  {
    const repos = this.state.repos ? this.state.repos.map(repo =>
      <div className="repo">
        <a className="repo-name" href={ repo.url }>{ repo.name }</a>
        <p>{ repo.desc }</p>
        <div className="repo-info">
          <a href={ `${repo.url}/search?l=${ repo.lang }` } className="language-div repo-stat">
            <span className="language-color" style={ { background: repo.color } }></span>
            { repo.lang }
          </a>
          <a href={ `${repo.url}/stargazers` } className="repo-stars repo-stat">
             { repo.stars }
          </a>
          <a href={ `${repo.url}/network/members` } className="repo-stars repo-stat">
             { repo.forks }
          </a>
        </div>
      </div>
    ) : undefined;
    
    return (
      <div id="work" className="section">
        <h3 className="section-title">GitHub Projects</h3>
        <div id="repos">
          { repos }
        </div>
      </div>
    )
  }
}

export default Work;
