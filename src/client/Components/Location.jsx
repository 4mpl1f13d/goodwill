import React, { Component } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";

export class Location extends Component {
  state = {
    open: false,
  };

  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };

  render() {
    return (
      <section
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        id="about"
        className="three"
      >
        <div className="container">
          <header>
            <h2>Pick Location</h2>
          </header>

          <div
            className="container col-md-10"
            style={{
              maxHeight: "450px",
              border: "3px solid lightgreen",
              backgroundColor: "white",
            }}
          >
            <div className="d-flex justify-content-left my-4">
              <h4 style={{ color: "black" }}>Choose Your Goodwill Store</h4>
            </div>

            <div className="d-flex justify-content-start align-items-center my-4">
              <h6 style={{ color: "black" }}>Zipcode:</h6>
              <input
                className="text-center mx-2"
                type="text"
                placeholder="Zipcode"
                style={{ width: "160px" }}
              />
            </div>

            {/* Dropdown selection code */}
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label style={{ color: "black" }}>
                  Select Store:
                </Form.Label>
                <Form.Control as="select" custom>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form>

            <div>
              {/* <div className="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.handleButtonClick}>
                  Locations List
                </button>
              </div>

                {this.state.open && (
                  <div className="dropdown-menu dropdown-menu-right" style={{backgroundColor:'coral'}}>
                    <button className="dropdown-item" type="button">Action</button>
                    <button className="dropdown-item" type="button">Another action</button>
                    <button className="dropdown-item" type="button">Something else here</button>
                  </div>

                  )} */}

              {/* <div className="my-3">
                <button type="button" className="btn btn-primary btn-lg btn-block">Complete Donation</button>
              </div> */}

              <div className="d-flex justify-content-center align-content-end my-5">
                <button
                  href="#top"
                  type="button"
                  className="btn btn-success btn-md"
                  style={{ width: "100px" }}
                >
                  {" "}
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 my-4">
            <a href="#checkOut" className="button scrolly">
              Review Donation
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Location;
