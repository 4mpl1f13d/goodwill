import React, { Component, ReactFragment } from "react";
import ReactToPrint from "react-to-print";
import phoneNumbers from "./Location";
import e from "express";

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment id="printMe">
        {/* Shopping cart table */}
        <div
          id="checkOut"
          className="one cover"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="row">
            <h1 style={{ color: "#333", padding: "2em" }}>
              Goodwill Donation Summary
            </h1>
          </div>
          <div className="one cover flex-container">
            <table className="table table-striped content">
              <thead>
                <tr>
                  <th scope="col" className="border-0 bg-dark">
                    <div className="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" className="border-0 bg-dark">
                    <div className="py-2 text-uppercase">
                      Estimated Tax Savings
                    </div>
                  </th>
                  {/* <th scope="col" className="border-0 bg-dark">
                    <div className="py-2 text-uppercase">Quantity</div>
    </th>*/}
                  <th scope="col" className="border-0 bg-dark">
                    <div className="py-2 text-uppercase">Remove</div>
                  </th>
                </tr>
              </thead>

              {/*Table*/}
              <tbody>
                {this.props.itemStats.map((item, id) => {
                  return (
                    <tr key={id}>
                      <th scope="row" style={{ backgroundColor: "#A9A9A9" }}>
                        <div className="p-2">
                          <img
                            src={item.image}
                            alt
                            className="bg rounded shadow-sm"
                            style={{ margin: "10px" }}
                          />
                          <br />
                          <div className="ml-3 d-inline-block align-middle">
                            <h5 className="mb-0">
                              {" "}
                              <a href="#" className="text-light d-inline-block">
                                {item.make} {item.model}
                              </a>
                            </h5>
                            <span className="text-muted font-weight-normal font-italic">
                              {item.condition}
                            </span>
                          </div>
                        </div>
                      </th>
                      <td className="d-flex justify-content-center">
                        <strong>${item.appraisal}.00</strong>
                      </td>
                      {/*<td className="align-middle">
                        <strong>{id}</strong>
                  </td>*/}
                      <td
                        className="align-middle"
                        style={{ paddingLeft: "2em" }}
                      >
                        <a href="#" className="text-light">
                          <i
                            className="fa fa-trash"
                            style={{ color: "#A9A9A9" }}
                          />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* End */}

          <div className="row py-5 p-4 bg-white rounded shadow-sm">
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Selected Thrift Store Location
              </div>

              <div className="p-2">
                <div className="ml-3 d-inline-block align-middle">
                  <h5 className="mb-0">{this.props.handleBusiness}</h5>
                  <span className="text-muted font-weight-normal font-italic d-block">
                    {this.props.newBusiness} 
                  </span>
                 
                </div>
              </div>
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Instructions for GoodWill pickup team
              </div>
              <div className="p-4">
                {/* <p className="font-italic mb-4">
                  If you have some information for the donation pick up team you
                  can leave them in the box below
                </p> */}
                <textarea
                  name
                  cols={30}
                  rows={4}
                  className="form-control"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Order summary{" "}
              </div>
              <div className="p-4">
                <p className="font-italic mb-4">
                  Free delivery and pickup. Contactless donation also available at participating locations.
                  Estimated tax savings are calculated based on average Fair Market Value.
                </p>
                <ul className="list-unstyled mb-4">
                  {/* <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Order Subtotal </strong>
                    <strong>${this.props.total}.00</strong>
                  </li> */}
                  {/* <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">
                      Total
                    </strong>
                    <strong>$0.00</strong>
                  </li> */}
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">
                      {" "}
                      Estimated Value Reclaimed{" "}
                    </strong>

                    <strong>${this.props.total}.00</strong>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn btn-dark rounded-pill py-2 btn-block"
                  onClick={() =>window.print()}
                >
                  TEST
                </a>
              </div>
            </div>
          </div>
          {/*MY CONTAINER*/}
        </div>
      </React.Fragment>
    );
  }
}

export class Example extends Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print Your Donation Receipt</a>}
          content={() => this.CheckOut}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default CheckOut;
