import React, { Component } from 'react';

let Screen3 = (props) => {
    return (
        <React.Fragment>
                <div className="container col-md-8 text-center py-2" style={{maxWidth:'500px', backgroundColor: "lightgreen", color:'white' }}>
                    <button className="btn d-flex justify-content-start"><i className="fa fa-home"></i></button>
                    <h1>Item Summary</h1>
                </div>

            <div className="container col-md-8" style={{ maxWidth: '500px', border: '1px solid lightgreen'}}>
                <h3 className="text-center mx-2 my-2">List Items</h3>
                <div>
                    <div>
                        <h5>List Item 1</h5>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center">
                            <input className="form-control my-2" type="text" placeholder="Appraisal" style={{ width: '100px' }} readOnly />
                            <div className="input-group-append d-flex align-items-center mx-2">
                                <button className="btn btn-outline-danger btn-sm" style={{ width: '95px', height: '30px'}}><i className="fa fa-trash"></i> Delete </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h5>List Item 2</h5>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center">
                                <input className="form-control my-2" type="text" placeholder="Appraisal" style={{ width: '100px' }} readOnly />
                                <div className="input-group-append d-flex align-items-center mx-2">
                                    <button className="btn btn-outline-danger btn-sm" style={{ width: '95px', height: '30px' }}><i className="fa fa-trash"></i> Delete </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h5>List Item 3</h5>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center">
                                <input className="form-control my-2" type="text" placeholder="Appraisal" style={{ width: '100px' }} readOnly />
                                <div className="input-group-append d-flex align-items-center mx-2">
                                    <button className="btn btn-outline-danger btn-sm" style={{ width: '95px', height: '30px' }}><i className="fa fa-trash"></i> Delete </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end align-items-center my-3">
                        <h6>Donation Total:</h6>
                        <input className="text-center" type="text" placeholder="Total" style={{ width: '60px' }} readOnly />
                    </div>
                    <div className="d-flex justify-content-around">
                        <button type="button" className="btn btn-warning my-2"> + Add</button>
                        <button type="button" className="btn btn-success my-2 mx-4">Donate</button>
                    </div>
                </div>


            </div>
                <div className="container col-md-8 text-center py-2" style={{ maxWidth:'500px', backgroundColor: "lightgreen", color: 'white' }}>
                    <h1>Advertising</h1>
                </div>
        </React.Fragment>
    );
};
export default Screen3