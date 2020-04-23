import React, { Component, Fragment } from "react";
import NavBar from "./NavBar";
import Welcome from "./Welcome.component/Welcome";
import Details from "./Details";
import Location from "./Location";
import CheckOut from "./CheckOut";
import Footer from "./Footer";
import NameZip from "./NameZip";
import CheckOut from "./CheckOut";

class Home extends Component {
  constructor(props) {
    super(props);

 // EX id = searchid AKA UID (DKVhKVCsR3JUemibU45rhq)/ item.make = hp / item.model = dv7-6b55 laptop (keywords=hp dv7-6b55 laptop&) / 
 // item.condition = grade (3000) / item.appraisal = (TOTAL marketvalue /  TOTAL itemcount) $80.8
 // galleryURL as opacity background on card (https://thumbs2.ebaystatic.com/m/mdynTPmeixZC3K09ywiaDdQ/140.jpg

    this.state = {
      itemStats: [
        {
          make: "HP laptop",
          model: "dv7-6b55",
          condition: "Used",
          appraisal: 81,
          id: 0,
        },

 // EX id = searchid AKA UID (A5yUFngruhCZvg4L4ire4v)/ item.make = Vizio / item.model = D24h-C1& (keywords=Vizio D24h-C1&) / 
 // item.condition = grade (3000) / item.appraisal = (TOTAL marketvalue /  TOTAL itemcount) $34.9
 // galleryURL as opacity background on card (https://thumbs3.ebaystatic.com/m/mcZoJz1WghKRxvmK3uMFRNg/140.jpg

        {
          make: "Vizio",
          model: "D24h-C1",
          condition: "Used",
          appraisal: 35,
          id: 1,
        },

 // EX id = searchid AKA UID (3tEUHTyExcgomwjmYZYP3Y)/ item.make = New Balance / item.model = MX517v1 (keywords=New Balance MX517v1&) / 
 // item.condition = grade (3000) / item.appraisal = (TOTAL marketvalue /  TOTAL itemcount) $29.5
 // galleryURL as opacity background on card (https://thumbs4.ebaystatic.com/m/m4KALgx3WrfGHcivB28aCpA/140.jpg

        {
          make: "New Balance",
          model: "MX517v1",
          condition: "Used",
          appraisal: 30,
          id: 2,
        },

 // EX id = searchid AKA UID (HtjmJtDLGoRLvWKzkyUGmX)/ item.make = hitachi / item.model = H2T500854S (keywords=corsair k95 rgb keyboard&)
 // item.condition = grade (1000) / item.appraisal = (TOTAL marketvalue /  TOTAL itemcount) $147.6
 // galleryURL as opacity background on card (https://thumbs4.ebaystatic.com/m/m4KALgx3WrfGHcivB28aCpA/140.jpg

        {
          make: "corsair keyboard",
          model: "k95 rgb",
          condition: "New",
          appraisal: 148,
          id: 3,
        },

// EX id = searchid AKA UID (T1GVa4oTENMW2R2A6fB4pu)/ item.make = hitachi / item.model = H2T500854S (keywords=hitachi H2T500854S&)
 // item.condition = grade (3000) / item.appraisal = (TOTAL marketvalue /  TOTAL itemcount) $18.6
 // galleryURL as opacity background on card (https://thumbs4.ebaystatic.com/m/m4KALgx3WrfGHcivB28aCpA/140.jpg

        {
          make: "Hitachi",
          model: "H2T500854S",
          condition: "Used",
          appraisal: 19,
          id: 4,
        },
      ],

      newMake: "",
      newModel: "",
      newCondition: "",
      total: "",
      newId: 5,
      newBusiness: "",
      newPhone: "",

      // newAppraisal: Number

      phoneNumbers: [
        {business: "Sozo Trading Co 4 41st St S, Birmingham, AL 35222",
        phone: "(205) 703-0553"
        },
        {business: "Zoe Forest Park 3900 Clairmont Ave, Birmingham, AL 35222",
        phone: "(205) 595-9049"
        },
        {business: "King's Home Thrift, 1569 Cooper Hill Rd, Irondale, AL 35210",
        phone: "(205) 956-5658"
        },
        {business: "Fifty-Fifth Place, 5 55th Pl N, Birmingham, AL 35212 ",
        phone: "(205) 591-4631"
        },
        {business: "Lovelady Thrift Store, 7720 Ludington Ln, Irondale, AL 35210",
        phone: "(205) 951-9230"
        }
      ]
    };  

    this.handleClick = this.handleClick.bind(this);
    this.handleMakeInput = this.handleMakeInput.bind(this);
    this.handleModelInput = this.handleModelInput.bind(this);
    this.handleConditionInput = this.handleConditionInput.bind(this);
    this.addTotal = this.addTotal.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleBusiness = this.handleBusiness.bind(this);

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
      id: this.state.newId++,
      // business: this.state.business,
      // phone: this.state.phone,

      // newLocation: this.state.newLocation
      // appraisal: this.state.newAppraisal
    };
    this.setState({ itemStats: [...this.state.itemStats, newStats] }, () => {
      console.log(this.state.itemStats);
    });
    // this.setState({ newId: this.state.newId++ });
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


  handleBusiness(e) {
    this.setState({ newBusiness: e.target.value });
    console.log(e.target.value);
    // console.log(option.value())
  }


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
            handleChange={this.handleChange}
            newMake={this.state.newMake}
            newModel={this.state.newModel}
            newCondition={this.state.newCondition}
            itemStats={this.state.itemStats}
            phoneNumbers={this.state.phoneNumbers}
            handleBusiness={this.handleBusiness}

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
          <Location handleBusiness={this.handleBusiness} phoneNumbers={this.state.phoneNumbers} />
          {/* <CheckOut />*/}
          <CheckOut
            total={this.state.total}
            itemStats={this.state.itemStats}
            onDelete={this.handleDeleteClick}
            handleBusiness={this.handleBusiness}
            newBusiness={this.state.newBusiness}
            newPhone={this.state.newPhone}
            phoneNumbers={this.state.phoneNumbers}
          />
        </div>
        {/* Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
