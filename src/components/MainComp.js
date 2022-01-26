import React, { Component } from 'react';
import Rentals from "./Rentals.js";
// import Memberships from "./components/Memberships.js";
// import Pricing from "./components/Pricing.js";
import { RENTALS } from '../data/rentalData.js';
import { PRICING } from '../data/pricingData.js';
import NavbarComp from './NavbarComp';
import "../styles/styles.css";
import Carousel from './Carousel';
import Pricing from './Pricing';
import Contact from './Contact';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rentals: RENTALS,
            pricing: PRICING
        };
    }

    render() {
        return (
            <>
            <div>
                <NavbarComp/>
                <Carousel ><h1>Exotic Rentals</h1></Carousel>
                <Rentals rentals={this.state.rentals}/>
                <Pricing pricing={this.state.pricing}/>
                <Contact/>
            </div>
            </>
        );
    };
}

export default Main;