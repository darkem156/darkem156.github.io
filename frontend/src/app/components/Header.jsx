import React, { Component } from "react";

class Header extends Component
{
  constructor(props)
  {
    super(props)
    this.links = 
    [ 
      { name: "Home", url: "/"}, 
      { name: "Work", url: "/work" }, 
      { name: "CV", url: "/cv" }, 
      { name: "Contact", url: "/contact"} 
    ]
  }

  render()
  {
    const lis = this.links.map(link =>
      <li>
        <a className={ location.pathname == link.url ? "staying" : "" } href={ link.url }>{ link.name }</a>
      </li>
    );

    return (
      <header id={ this.props.id }>
        <nav>
          <ul>
            { lis }
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
