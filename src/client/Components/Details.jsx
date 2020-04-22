import React, { Component } from "react";
import { Card } from "react-bootstrap";

// // Server Calls to Backend to populate values from DB
// import fetch from 'node-fetch';
// import * as mysql from "mysql";
// import UID from '../server/services/';
// import credentials from '../config/credentials';
// const fs = require('fs');

// // MySQL Connection
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: credentials.mysql.user,
//   password: credentials.mysql.password,
//   database: credentials.mysql.database
// });

 // EX id = searchid AKA UID (DKVhKVCsR3JUemibU45rhq)/ item.make = hp / item.model = dv7-6b55 laptop (keywords=hp dv7-6b55 laptop&) / 
 // item.condition = grade (3000) / item.appraisal = (TOTAL marketvalue /  TOTAL itemcount) $80.8
 // galleryURL as opacity background on card (https://thumbs2.ebaystatic.com/m/mdynTPmeixZC3K09ywiaDdQ/140.jpg)

// fs.readFile(select * mysql.dona8tr.ebayfoos){
//   let id=dona8tr.ebayfoo.searchid;
//   let `${item.condition}`=dona8tr.ebayfoo.grade;
// }; 

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
<<<<<<< HEAD

                 <div className="d-inline-block mx-2 my-2" key={id}>
                    <Card background src ="galleryURL"  border="success" style={{ width: "14rem" }}>
                      <Card.Header>{counter++}</Card.Header>
=======
                  <div className="d-inline-block mx-2 my-2" key={item.id}>
                    <Card border="success" style={{ width: "12rem" }}>
                      <Card.Header style={{height: '35px'}}>{counter++}</Card.Header>
>>>>>>> cardupdateDelete
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
