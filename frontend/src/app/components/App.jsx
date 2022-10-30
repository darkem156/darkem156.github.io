import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Work from "./Work.jsx";
import Cv from "./Cv.jsx";
import Contact from "./Contact.jsx";

class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {}
  }

  render()
  {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Header id="header" />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/work" element={ <Work /> } />
            <Route path="/cv" element={ <Cv /> } />
            <Route path="/contact" element={ <Contact /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
