import React, { Component } from "react";

class Cv extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {}
  }

  componentDidMount() { document.title = "CV" }
  componentDidUpdate() { document.title = "CV" }

  render()
  {
    return (
      <div id="cv" className="section">
        <iframe src="../assets/cv.pdf" width="100%" style={ { height: "100vh" } }>
        </iframe>
      </div>
    )
  }
}

export default Cv;
