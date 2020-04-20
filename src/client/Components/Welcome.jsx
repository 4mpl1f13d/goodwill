import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
      this.state= {}
    };

  render() {
    return (
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h1>Find the value of your item </h1>
            <p>Enter in the details and we will do the work</p>
          </header>
          <footer>
            <form method="post" action="#">
              <div className="row">
                <div className="col-4 col-12-mobile">
                  <input type="text" name="Make" id='makeField' placeholder="Make"
                      onChange={(event)=> this.props.handleMakeInput(event)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-12-mobile">
                  <input type="text" name="model" id='modelField' placeholder="model"
                      onChange={(event)=> this.props.handleModelInput(event)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-4 col-12-mobile">
                  <select className="" name="condition" id="condition" onChange={(event)=> this.props.handleConditionInput(event)}>
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

              <div className="col-12">
                <a id="search-btn" href="#top-2" className="button scrolly" onClick={() => this.props.handleClick()} >
                  <span className="fas fa-search"></span> Search
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
