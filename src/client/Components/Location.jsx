import React, { Component } from "react";

export class Location extends Component {
  render() {
    return (
      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>Pick Location</h2>
          </header>
          <div className="col-12">
            <a href="#" className="button scrolly">
              Add
            </a>
            <a href="#contact" className="button scrolly">
              Next
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Location;
