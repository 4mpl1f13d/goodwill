import React, { Component, Fragment } from "react";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Details from "./Details";
import Location from "./Location";
import CheckOut from "./CheckOut";
import Footer from "./Footer";
import NameZip from "./NameZip";
import CheckOut from "./CheckOut";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemStats: [
        {
          make: "Sony Xperia",
          model: "l3123",
          condition: "Used",
          appraisal: 300,
        },
        {
          make: "Fire 10",
          model: "UX347",
          condition: "New",
          appraisal: 150,
        },
        {
          make: "Fire 7",
          model: "UM926",
          condition: "Used",
          appraisal: 25,
        },
      ],

      newMake: "",
      newModel: "",
      newCondition: "",
      // newAppraisal: Number
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMakeInput = this.handleMakeInput.bind(this);
    this.handleModelInput = this.handleModelInput.bind(this);
    this.handleConditionInput = this.handleConditionInput.bind(this);
  }

  handleClick() {
    const newStats = {
      make: this.state.newMake,
      model: this.state.newModel,
      condition: this.state.newCondition,
      // appraisal: this.state.newAppraisal
    };
    this.setState({ itemStats: [...this.state.itemStats, newStats] }, () => {
      console.log(this.state.itemStats);
    });
  }

  handleMakeInput(e) {
    this.setState({ newMake: e.target.value });
  }

  handleModelInput(e) {
    this.setState({ newModel: e.target.value });
  }

  handleConditionInput(e) {
    this.setState({ newCondition: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <title>Donater</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        {/*Navbar*/}
        <NavBar />
        <div id="main">
          {/*Welcome(search)*/}
          <Welcome
            handleConditionInput={this.handleConditionInput}
            handleMakeInput={this.handleMakeInput}
            handleModelInput={this.handleModelInput}
            handleClick={this.handleClick}
            newMake={this.state.newMake}
            newModel={this.state.newModel}
            newCondition={this.state.newCondition}
            itemStats={this.state.itemStats}
          />
          {/*name and zip input*/}
          <NameZip />
          {/* Details */}
          <Details itemStats={this.state.itemStats} />
          {/* Pickup Loaction */}
          <Location />
          {/* <CheckOut />*/}
          <CheckOut itemStats={this.state.itemStats} />
        </div>
        {/* Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
