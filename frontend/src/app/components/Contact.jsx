import React, { Component } from "react";

class Contact extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {}
  }

  componentDidMount() { document.title = "Contact" }
  componentDidUpdate() { document.title = "Contact" }

  onChange = (e) =>
  {
    this.setState({ [e.target.name]: e.target.value })
  }

  render()
  {
    return (
      <div id="contact" className="section">
        <h3 className="section-title">Contact me!</h3>
        <form id="contact-form">
          <div id="message-data">
            <div id="name" className="message-info">
              <p>Name:</p>
              <input type="text" value={ this.state.name || "" } name="name" onChange={ this.onChange } />
            </div>
            <div id="email" className="message-info">
              <p>Email:</p>
              <input type="text" value={ this.state.email || "" } name="email" onChange={ this.onChange } />
            </div>
          </div>
          <div id="message" className="message-info">
            <p>Message:</p>
            <textarea type="text" value={ this.state.message || "" } name="message" onChange={ this.onChange } />
          </div>
          <div id="send-container">
            <button id="send" onClick={
              async (e) =>
              {
                e.preventDefault();
                const resp = await fetch("https://darkem.herokuapp.com/api/message", 
                  {
                    method: "POST",
                    headers:
                    {
                      "Accept": "application/json",
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.state)
                  })
                const res = await resp.json().then(data =>
                {
                  if(data.error) alert(data.error);
                  else alert(data.message)
                })
              }
            }>Send <span>黎</span></button>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact;
