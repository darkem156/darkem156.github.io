import React, { Component } from "react";

class Footer extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {}
  }

  render()
  {
    return (
      <div id="footer">
        <a href="https://github.com/darkem156" className="symbol"></a>
        <a href="mailto:emmanuelchan809@gmail.com" className="symbol"></a>
        <a href="https://linkedin.com/in/emmanuel-chan-cohuo-700725251/" className="symbol"></a>
        <a href="https://stackoverflow.com/users/19637468/darkem" className="symbol"></a>
        <a href="https://hub.docker.com/u/darkem156" className="symbol"></a>
      </div>
    )
  }
}

export default Footer;
