import React, { Component, Fragment } from "react";
import NavBar from "./NavBar";
import Welcome from "./Welcome.component/Welcome";
import Details from "./Details";
import Location from "./Location";
import CheckOut from "./CheckOut";
import Footer from "./Footer";
import NameZip from "./NameZip";
import CheckOut from "./CheckOut";
import { Alert } from "react-alert";

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
          id: 0,
        },
        {
          make: "Fire 10",
          model: "UX347",
          condition: "New",
          appraisal: 150,
          id: 1,
        },
        {
          make: "Fire 7",
          model: "UM926",
          condition: "Used",
          appraisal: 25,
          id: 2,
        },
      ],

      newMake: "",
      newModel: "",
      newCondition: "",
      total: "",
      newId: 3,
      // newAppraisal: Number
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMakeInput = this.handleMakeInput.bind(this);
    this.handleModelInput = this.handleModelInput.bind(this);
    this.handleConditionInput = this.handleConditionInput.bind(this);
    this.addTotal = this.addTotal.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  addTotal() {
    let appraisalArr = [];

    this.state.itemStats.map((item) => {
      appraisalArr.push(item.appraisal);
    });

    let adding = () => {
      let sum = appraisalArr.reduce((a, b) => a + b, 0);

      this.setState({ total: sum });
    };

    adding();
  }

  handleClick() {
    const newStats = {
      make: this.state.newMake,
      model: this.state.newModel,
      condition: this.state.newCondition,
      id: this.state.newId,
      // appraisal: this.state.newAppraisal
    };
    this.setState({ itemStats: [...this.state.itemStats, newStats] }, () => {
      console.log(this.state.itemStats);
    });
    this.setState({ newId: this.state.newId++ });
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

  //   onDelete(id) {
  //     deleteItemStats(id)
  //         .then((data) => {
  //             let itemStats = this.state.itemStats.filter((card) => {
  //                 return id !== card.id;
  //             });

  //             this.setState(state => {
  //                 state.itemStats = itemStats;
  //                 return state;
  //             });
  //         })
  //         .catch((err) => {
  //             console.error('err', err);
  //         });
  // }

  // handleDeleteClick = () => {
  //   alert('Button Clicked!');
  // }
  handleDeleteClick = (cardId) => {
    const cards = this.state.itemStats.filter((item) => item.id !== cardId);
    this.setState({ itemStats: cards });
    console.log("I did it");
    // alert("Say Something");
  };

  render() {
    return (
      <React.Fragment>
        <title>Donator</title>
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

          {/* Details */}
          <Details
            total={this.state.total}
            addTotal={this.addTotal}
            itemStats={this.state.itemStats}
            onDelete={this.handleDeleteClick}
            addTotal={this.addTotal}
          />
          {/* Pickup Loaction */}
          <Location />
          {/* <CheckOut />*/}
          <CheckOut
            total={this.state.total}
            itemStats={this.state.itemStats}
            onDelete={this.handleDeleteClick}
          />
        </div>
        {/* Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
