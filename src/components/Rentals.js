import React from 'react';
import { Card, CardImg, CardImgOverlay, CardDeck, CardBody, CardHeader } from 'reactstrap';
import styles from "../styles/styles.css";

function RenderRentalItem({rentals}) {
    return (
        <CardDeck>
        <Card className="bg-light card border-dark">
        <CardHeader className="card-header bg-dark text-light">{rentals.name}</CardHeader>
            <CardImg width="100%" src={rentals.image} alt={rentals.name} />
            <CardBody className="bg-warning">
                <p>{rentals.MSRP}</p>
                <p>{rentals.stats}</p>
                <p>{rentals.origin}</p>
                <p>{rentals.description}</p>
            </CardBody>
            <button className="btn btn-dark">Book Now</button>
        </Card>
        </CardDeck>
    );
}

function Rentals(props) {

    const rentals = props.rentals.map(rentals => {
        return (
            <div key={rentals.id} className="card-deck card-wrapper">
                <CardDeck>
                <RenderRentalItem rentals={rentals}/>
                </CardDeck>
            </div>
        );
    });

    return (
            <div className="container cars-info">
                <div className="row justify-content-between">
                {rentals}
                </div>
            </div>
    );
}

export default Rentals;