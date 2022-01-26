import React, { Component } from 'react';
import Rentals from "./Rentals.js";
// import Memberships from "./components/Memberships.js";
// import Pricing from "./components/Pricing.js";
import { RENTALS } from '../data/rentalData.js';
import NavbarComp from './NavbarComp';
// import styles from "../styles/styles.css";
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
                <NavbarComp/>
                <Carousel ><h1>Exotic Rentals</h1></Carousel>
                <Rentals rentals={this.state.rentals}/>
            </div>
            </>
        );
    };
}

export default Main;