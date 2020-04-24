import React, { Component } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";


export class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 

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
            className="container col-md-5"
            style={{
              maxHeight: "450px",
              border: "3px solid lightgreen",
              backgroundColor: "white",
            }}
          >
            <div className="d-flex justify-content-left my-4">
              <h4 style={{ color: "black" }}>Choose Your Donation Location</h4>
            </div>

            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label style={{ color: "black" }}>
                  Select Store:
                </Form.Label>
                <Form.Control as="select" custom 
               onChange={(event)=> this.props.handleBusiness(event)}
                >
                  <option value= {Object.values(this.props.phoneNumbers[0])}> 1. {this.props.phoneNumbers[0].business}</option>
                  <option value= {Object.values(this.props.phoneNumbers[1])}> 2. {this.props.phoneNumbers[1].business}</option>
                  <option value= {Object.values(this.props.phoneNumbers[2])}> 3. {this.props.phoneNumbers[2].business}</option>
                  <option value= {Object.values(this.props.phoneNumbers[3])}> 4. {this.props.phoneNumbers[3].business}</option>
                  <option value= {Object.values(this.props.phoneNumbers[4])}> 5. {this.props.phoneNumbers[4].business}</option>
                </Form.Control>
              </Form.Group>
            </Form>

            {/* <div>

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
            </div> */}
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

export default Location

