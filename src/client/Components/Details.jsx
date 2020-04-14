import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

export class DetailsV2 extends Component {
  render() {
    
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

              <div className="col-12" style={{overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap'}}>
                <div className="d-inline-block mx-2 my-2">
                <Card border="success" style={{ width: '14rem' }}>
                  <Card.Header>Item 1</Card.Header>
                  <Card.Body>
                    <Card.Title>Make and Model</Card.Title>
                    <Card.Text>
                      Condition: Used
                      <div className="d-flex justify-content-center">
                      <input className="form-control my-2" type="text" placeholder="Appraisal" style={{ width: '100px' }} readOnly />
                      </div>
                    </Card.Text>
                    <button className="btn btn-danger btn-sm" style={{ width: '95px', height: '30px'}}><i className="fa fa-trash"></i> Delete </button>
                  </Card.Body>
                </Card>
                </div>

                <div className="d-inline-block my-2">
                <Card border="warning" style={{ width: '14rem' }}>
                  <Card.Header>Item 2</Card.Header>
                  <Card.Body>
                    <Card.Title>Make and Model</Card.Title>
                    <Card.Text>
                      Condition: Used
                      <div className="d-flex justify-content-center">
                      <input className="form-control my-2" type="text" placeholder="Appraisal" style={{ width: '100px' }} readOnly />
                      </div>
                    </Card.Text>
                    <button className="btn btn-danger btn-sm" style={{ width: '95px', height: '30px'}}><i className="fa fa-trash"></i> Delete </button>
                  </Card.Body>
                </Card>
                </div>

                <div className="d-inline-block mx-2 my-2">
                <Card border="info" style={{ width: '14rem' }}>
                  <Card.Header>Item 3</Card.Header>
                  <Card.Body>
                    <Card.Title>Make and Model</Card.Title>
                    <Card.Text>
                      Condition: Used
                      <div className="d-flex justify-content-center">
                      <input className="form-control my-2" type="text" placeholder="Appraisal" style={{ width: '100px' }} readOnly />
                      </div>
                    </Card.Text>
                    <button className="btn btn-danger btn-sm" style={{ width: '95px', height: '30px'}}><i className="fa fa-trash"></i> Delete </button>
                  </Card.Body>
                </Card>
                </div>

                <div className="d-inline-block mx-1 my-2">
                <Card border="danger" style={{ width: '14rem' }}>
                  <Card.Header>Item 4</Card.Header>
                  <Card.Body>
                    <Card.Title>Make and Model</Card.Title>
                    <Card.Text>
                      Condition: Used
                      <div className="d-flex justify-content-center">
                      <input className="form-control my-2" type="text" placeholder="Appraisal" style={{ width: '100px' }} readOnly />
                      </div>
                    </Card.Text>
                    <button className="btn btn-danger btn-sm" style={{ width: '95px', height: '30px'}}><i className="fa fa-trash"></i> Delete </button>
                  </Card.Body>
                </Card>
                </div>

                <div className="d-inline-block mx-1 my-2">
                <Card border="secondary" style={{ width: '14rem' }}>
                  <Card.Header>Item 5</Card.Header>
                  <Card.Body>
                    <Card.Title>Make and Model</Card.Title>
                    <Card.Text>
                      Condition: Used
                      <div className="d-flex justify-content-center">
                      <input className="form-control my-2" type="text" placeholder="Appraisal" style={{ width: '100px' }} readOnly />
                      </div>
                    </Card.Text>
                    <button className="btn btn-danger btn-sm" style={{ width: '95px', height: '30px'}}><i className="fa fa-trash"></i> Delete </button>
                  </Card.Body>
                </Card>
                </div>

                <div className="d-inline-block mx-2 my-2">
                <Card border="success" style={{ width: '14rem' }}>
                  <Card.Header>Item 6</Card.Header>
                  <Card.Body>
                    <Card.Title>Make and Model</Card.Title>
                    <Card.Text>
                      Condition: Used
                      <div className="d-flex justify-content-center">
                      <input className="form-control my-2" type="text" placeholder="Appraisal" style={{ width: '100px' }} readOnly />
                      </div>
                    </Card.Text>
                    <button className="btn btn-danger btn-sm" style={{ width: '95px', height: '30px'}}><i className="fa fa-trash"></i> Delete </button>
                  </Card.Body>
                </Card>
                </div>

              </div>

            <div className="d-flex justify-content-center my-1">
              <button href="#top" type="button" className="btn btn-outline-warning btn-md scrolly" style={{width: '100px'}}> + Add</button>
            </div>

            </div>


          </div>


          <div className="row my-3" id="details">
            <div className="col-4 col-12-mobile">
              <div className="col-12">
                <a href="#about" className="button scrolly" role="button">
                  Donate
                </a>
              </div>
            </div>
          </div>

      </section>
    )
  }
}

export default DetailsV2
