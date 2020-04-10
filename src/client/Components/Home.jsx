import React, { Component, Fragment } from "react";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Details from "./Details";
import Location from "./Location";
import CheckOut from "./CheckOut";
import Footer from "./Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div>
          {/*Navbar*/}
          <NavBar />
          <div id="main">
            {/*Welcome(search)*/}
            <Welcome />
            {/* Details */}
            <Details />
            {/* Pickup Loaction */}
            <Location />
            {/* Check Out (PRINT) */}
            <CheckOut />
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
