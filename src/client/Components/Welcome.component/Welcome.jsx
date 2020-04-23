import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section
        id="top"
        // className="one dark cover"
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1554921027-b91f0beeb07d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "auto",
        }}
      >
        <div className="top container">
          <header>
            <h1>Find the value of your item</h1>
            <p className="text-white">
              Enter in the details and we'll do the work...
            </p>
          </header>
          <footer>
            <form method="post" action="#">
              <div className="row">
                <div className="col-4 col-12-mobile">
                  <input
                    type="text"
                    name="Make"
                    id="makeField"
                    placeholder="Make"
                    onChange={(event) => this.props.handleMakeInput(event)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-12-mobile">
                  <input
                    type="text"
                    name="model"
                    id="modelField"
                    placeholder="Model"
                    onChange={(event) => this.props.handleModelInput(event)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-4 col-12-mobile">
                  <select
                    className=""
                    name="condition"
                    id="condition"
                    onChange={(event) => this.props.handleConditionInput(event)}
                  >
                    <option selected="selected">Condition</option>
                    <option id="condition-broke" value="Broken">
                      Broken
                    </option>
                    <option id="condition-used" value="Used">
                      Used
                    </option>
                    <option id="condition-new" value="New">
                      New
                    </option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-4 col-12-mobile">
                  <input id="name" type="text" name="name" placeholder="Name" />
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-12-mobile">
                  <input
                    id="zip"
                    type="text"
                    name="zip code"
                    placeholder="Zip code"
                    // onChange={(event)=> this.props.handleBusiness(event)}
                  />
                </div>
              </div>

              <div className="col-12">
                <a
                  id="search-btn"
                  href="#portfolio"
                  className="button scrolly"
                  onClick={() => this.props.handleClick()}
                >
                  <span className="fas fa-calculator"></span> Calculate
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
