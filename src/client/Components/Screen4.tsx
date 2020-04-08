import React, { Component } from 'react';
// import '../Screen.css';

let Screen4 = (props) => {
    return (
        <React.Fragment>
            <div className="container col-md-8 text-center py-2" style={{maxWidth:'500px', border: '1px solid black' , backgroundColor: "rgba(50, 169, 173, 0.808)", color:'white' }}>
                    <button className="btn d-flex justify-content-start" style={{backgroundColor: 'white'}}><i className="fa fa-home"></i></button>
                    <h1>Donator</h1>
            </div>
            <div className="container col-md-8" style={{ maxWidth: '500px', border: '1px solid black' }}>
            
                <div style={{height: '30px'}}></div>

                <div className="my-4">
                    <h4>Choose Your Goodwill Store</h4>
                </div>
                <div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Locations List
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">Action</button>
                            <button className="dropdown-item" type="button">Another action</button>
                            <button className="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-start align-items-center my-4">
                        <h6>Location:</h6>
                        <input className="text-center mx-2" type="text" placeholder="Preferred Location" style={{ width: '360px' }} readOnly />
                </div>

                <div style={{height: '180px'}}>

                </div>

                <div className="my-3">
                    <button type="button" className="btn btn-primary btn-lg btn-block">Complete Donation</button>
                </div>
            </div>

            <div className="container col-md-8 text-center py-2" style={{ maxWidth:'500px', border: '1px solid black' , backgroundColor: "rgba(50, 169, 173, 0.808)", color: 'white' }}>
                    <h1>Advertising</h1>
            </div>

        </React.Fragment>
    );
};
export default Screen4