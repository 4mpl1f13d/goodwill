import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemStats: props.itemStats,
      newMake: props.newMake,
      newModel: props.newModel,
      newCondition: props.newCondition,
      newAppraisal: props.newAppraisal,

    };
  }

  render() {
    let counter = 1;
    return (
      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Details</h2>
          </header>

          <div className="container2">
            <div>
              <h4>List Items</h4>
            </div>
            <div
              className="col-12">
              {this.props.itemStats.map((item) => {
                return (
                  <div className="d-inline-block mx-2 my-2" key={item.id}>
                    <Card border="success" style={{ width: "12rem" }}>
                      <Card.Header style={{height: '35px'}}>{counter++}</Card.Header>
                      <Card.Body>
                        <Card.Title>
                          {item.make} {item.model}
                        </Card.Title>
                        <div className="d-flex justify-content-center">
                          <Card.Text>
                            {item.condition}
                            <div className="d-flex justify-content-center">
                            $
                            <input
                              className="form-control my-2 text-center"
                              type="text"
                              placeholder= {item.appraisal}
                              style={{ width: "100px", height: '20px' }}
                              readOnly
                            />
                            </div>
                          </Card.Text>
                        </div>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          style={{ width: "50px", height: "25px" }}
                          onClick={() => this.props.onDelete(item.id)}
                        >
                          <i className="fa fa-trash"></i> 
                        </button>

                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        <div className="row my-3" id="details">
          <div className="col-4 col-12-mobile">
            <div className="col-12 d-flex justify-content-between">
              <button
                href="#top"
                type="button"
                className="btn btn-outline-warning btn-md scrolly"
                style={{ width: "100px" }}
              >
                + Add
              </button>
              <a
                href="#about"
                className="button scrolly"
                onClick={() => this.props.addTotal()}
                role="button"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Details;
