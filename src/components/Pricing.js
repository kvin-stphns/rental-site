import React from 'react';
import { Card, Button, CardTitle, CardText, CardBody, CardHeader } from 'reactstrap';
import "../styles/styles.css";

const PricingCard = ({ pricing }) => {
    console.log(pricing);
    return (
        <Card>
            <CardHeader tag="h3">
                {pricing.title}
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5">
                    {pricing.price}
                </CardTitle>
                <CardText>
                    {pricing.description}
                </CardText>
                <Button className='{pricing.buttonVariant}'>
                    {pricing.buttonText}
                </Button>
            </CardBody>
        </Card>);
}


function Pricing(props) {
    console.log(props);
    const pricing = props.pricing.map(pricing => {
        return (
            <span key={pricing.id} className="flex card-deck card-wrapper">
                <div className='container'>
                    <div className='row'>
                        <PricingCard pricing={pricing} />
                    </div>
                </div>
            </span>
        );
    });

    return (
        <div className="container">
            <div className="row mx-auto mt-5 mb-5 pricing-info">
                {pricing}
            </div>
        </div>
    );
}




export default Pricing;