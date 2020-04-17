import React, { Component } from "react";
class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    {
      this.props.itemStats.map((item, id) => {
        return (
          <tr>
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
              <a href="#" className="text-light">
                <i className="fa fa-trash" />
              </a>
            </td>
          </tr>
        );
      });
    }
  }
}

export default ListItem;
