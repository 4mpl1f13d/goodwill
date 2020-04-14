import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h1>Find the value of your item </h1>
          </header>
          <footer>
            <form method="post" action="#">
              <div className="row">
                <div className="col-4 col-12-mobile">
                  <input type="text" name="Make" placeholder="Make" />
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-12-mobile">
                  <input type="text" name="Model" placeholder="Model" />
                </div>
              </div>

              <div className="col-12">
                <a href="#portfolio" className="button scrolly">
                  Search
                </a>
              </div>
            </form>
          </footer>
        </div>
      </section>
    );
  }
}

export default Welcome;
