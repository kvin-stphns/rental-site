import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Rentals from "./Rentals.js";
// import Memberships from "./components/Memberships.js";
// import Pricing from "./components/Pricing.js";
import { RENTALS } from '../data/rentalData.js';
import NavbarComp from './NavbarComp';
import styles from "../styles/styles.css";
import Carousel from './Carousel';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rentals: RENTALS,
        };
    }

    render() {
        return (
            <>
            <div>
                {/* <Navbar light color="light">
                    <div className="container">
                        <NavbarBrand href="/">Exotic Rentals</NavbarBrand>
                    </div>
                </Navbar> */}
                <NavbarComp/>
                <Carousel ><h1>Exotic Rentals</h1></Carousel>
                <Rentals rentals={this.state.rentals}/>
            </div>
    {/* <Router>
    <div>
     <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/rentals" component={Main} />
     </Switch>
    </div>
    </Router> */}
            </>
        );
    };
}

export default Main;