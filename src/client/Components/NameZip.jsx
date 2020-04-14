import React, { Component } from "react";

class NameZip extends Component {
  state = {};
  render() {
    return (
      <section id="top-2" className="three dark cover">
        <div className="container">
          <header>
            <h1>Before we calculate your item</h1>
            <p>
              please enter <span className="red">name</span> and{" "}
              <span className="red">zipcode</span>
            </p>
          </header>
          <footer>
            <form method="post" action="#">
              <div className="row">
                <div className="col-4 col-12-mobile">
                  <input id="name" type="text" name="name" placeholder="name" />
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-12-mobile">
                  <input
                    id="zip"
                    type="text"
                    name="zip code"
                    placeholder="zip code"
                  />
                </div>
              </div>

              <div className="col-12">
                <a
                  id="calculate-btn"
                  href="#portfolio"
                  className="button scrolly"
                >
                  <span className="icon solid fa-calculator"></span> Calculate
                </a>
              </div>
            </form>
          </footer>
        </div>
      </section>
    );
  }
}

export default NameZip;
