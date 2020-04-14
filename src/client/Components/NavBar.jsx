import React, { Component } from "react";
// import "../../../public/assets/css/main.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="header">
        <div className="top">
          {/* Logo */}
          <div id="logo">
            <h1 id="title">Donation App</h1>
            <p>Value generator</p>
          </div>
          {/* Nav */}
          <nav id="nav">
            <ul>
              <li>
                <a href="#top" id="top-link">
                  <span className="icon solid fa-search">Search</span>
                </a>
              </li>
              <li>
                <a href="#top-2" id="top-link-2">
                  <span className="icon solid fa-calculator">Calculate</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" id="portfolio-link">
                  <span className="icon solid fal fa-list-alt">Details</span>
                </a>
              </li>
              <li>
                <a href="#about" id="about-link">
                  <span className="icon solid fa-map-marker-alt">
                    Pick Loction
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact" id="contact-link">
                  <span className="icon solid fa-envelope">Check Out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bottom">
          {/* Social Icons */}
          <ul className="icons">
            <li>
              <a href="#" className="icon brands fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-facebook-f">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-dribbble">
                <span className="label">Dribbble</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon solid fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;