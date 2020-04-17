import React, { Component, Fragment } from "react";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Details from "./Details";
import Location from "./Location";
import CheckOut from "./CheckOut";
import Footer from "./Footer";
import NameZip from "./NameZip";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemStats: [
        {
          make: 'Sony Xperia',
          model: 'l3123',
          condition: 'Used',
          appraisal: 300,
        },
        {
          make: 'Fire 10',
          model: 'UX347',
          condition: 'New',
          appraisal: 150,
        },
        {
          make: 'Fire 7',
          model: 'UM926',
          condition: 'Used',
          appraisal: 25,
        },

      ],

        //NOTE: the properties below signify the new fields that the user's added info will be
        //NOTE: stored in (similar to the chirper-lab part 1 setup)
        //NOTE: newAppraisal is commented out becuase we haven't fetched the info from API yet
      newMake: '',
      newModel: '',
      newCondition: '',
      // newAppraisal: Number
    }

    //NOTE: The "this.blah=blah(this)" section of code below is to let the code know that "this" is referring
    //NOTE: to the home page's methods (the handlers) instead of allowing the "this" keyword to
    //NOTE: focus on anything in the classes from the other component pages when the methods are
    //NOTE: passed into those components
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
      //NOTE: appraisal is commented out here because we haven't called for the info from the API
    };
    // NOTE: the code below is to read the states of the prefilled properties from the itemStats[] and
    // NOTE: and newStats constant through the use of the spreader([...]) function
    this.setState({ itemStats: [...this.state.itemStats, newStats] }, () => {
      console.log(this.state.itemStats);
    });
  }

  handleMakeInput(e) {
    // NOTE: event listener and setState function for the first input box (Make input)
    this.setState({ newMake: e.target.value });
  }

  handleModelInput(e) {
    // NOTE: event listener and setState function for the second input box (Model input)
    this.setState({ newModel: e.target.value });
  }

  handleConditionInput(e) {
    // NOTE: event listener and setState function for the dropdown (Condition Dropdown)
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
          {/* Tag below renders the Welcome component & passes all necessary methods and states to that component to create new cards */}
          <Welcome handleConditionInput={this.handleConditionInput} handleMakeInput={this.handleMakeInput} handleModelInput={this.handleModelInput} handleClick={this.handleClick} newMake={this.state.newMake} newModel={this.state.newModel} newCondition={this.state.newCondition} itemStats={this.state.itemStats} />
          {/*name and zip input*/}
          <NameZip />
          {/* Details */}
          {/* Tag below renders the Details component and passes itemStats[] into the component as a prop because the map function within the component requires the prop to actually parse out the info from the properties within the [] to create each card */}
          <Details itemStats={this.state.itemStats} />
          {/* Pickup Loaction */}
          <Location />
          {/* Check Out (PRINT) */}
          <CheckOut />
        </div>
        {/* Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
