import React, { Component, ReactFragment } from "react";

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* Shopping cart table */}
        <div className="one dark cover">
          <div className="row">
            <h1 style={{ color: "grey", padding: "2em" }}>
              Goodwill tax results
            </h1>
          </div>
          <table className="container">
            <thead>
              <tr>
                <th scope="col" className="border-0 bg-secondary">
                  <div className="p-2 px-3 text-uppercase">Product</div>
                </th>
                <th scope="col" className="border-0 bg-secondary">
                  <div className="py-2 text-uppercase">
                    Estimated Tax Savings
                  </div>
                </th>
                <th scope="col" className="border-0 bg-secondary">
                  <div className="py-2 text-uppercase">Quantity</div>
                </th>
                <th scope="col" className="border-0 bg-secondary">
                  <div className="py-2 text-uppercase">Remove</div>
                </th>
              </tr>
            </thead>

            {/*Table*/}
            <tbody>
              {this.props.itemStats.map((item, id) => {
                return (
                  <tr key={id}>
                    <th scope="row">
                      <div className="p-2">
                        <img
                          src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-2_qxjis2.jpg"
                          alt
                          width={70}
                          className="img-fluid rounded shadow-sm"
                        />
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
                    <td className="align-middle">
                      <strong>{item.appraisal}</strong>
                    </td>
                    <td className="align-middle">
                      <strong>{id}</strong>
                    </td>
                    <td className="align-middle">
                      <a href="#" className="text-light" onClick={() => this.props.onDelete(item.id)} > 
                        <i className="fa fa-trash" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* End */}

          <div className="row py-5 p-4 bg-white rounded shadow-sm">
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Selected GoodWill Location
              </div>
              <div className="p-2">
                <img
                  src="assets/images/741-SW-19-Moore-2-of-3-450x250.jpg"
                  alt
                  width={70}
                  className="img-fluid rounded shadow-sm"
                />
                <div className="ml-3 d-inline-block align-middle">
                  <h5 className="mb-0">
                    <a
                      href="#"
                      className="text-light d-inline-block align-middle"
                    />
                    GoodWill Hoover
                  </h5>
                  <span className="text-muted font-weight-normal font-italic d-block">
                    6215 Tattersall Blvd Unit 105, Hoover, AL 35242
                  </span>
                  (205) 403-6114 M-F 10-8PM
                </div>
              </div>
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Instructions for GoodWill pickup team
              </div>
              <div className="p-4">
                <p className="font-italic mb-4">
                  If you have some information for the donation pick up team you
                  can leave them in the box below
                </p>
                <textarea
                  name
                  cols={30}
                  rows={2}
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
                  Free delivery pickup, estimated tax savings are calculated
                  based on values you have entered from Fair Market Value.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Order Subtotal </strong>
                    <strong>$390.00</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">
                      Estimated Tax Savings
                    </strong>
                    <strong>$0.00</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Total</strong>
                    <h5 className="font-weight-bold">$400.00</h5>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn btn-dark rounded-pill py-2 btn-block"
                >
                  Submit Your Items &amp; Download Your Receipt
                </a>
              </div>
            </div>
          </div>
          {/*MY CONTAINER*/}
        </div>
      </div>
    );
  }
}

export default CheckOut;
