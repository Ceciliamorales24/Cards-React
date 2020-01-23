import React from "react";
import "./card.css";
import "./cardText.css";
import CardTexts from "./cardTexts";
import Info from "./cardInfo";

const PlaceCard = props => {
    
    return (
        <section className="card" style={{
            backgroundImage: `url(${props.cardImg})`
        }}>
            <CardTexts cardTitle={props.cardTitle}
                cardSubTitle={props.cardSubTitle}
                cardText={props.cardText}
                cardLink={props.cardLink}>
            </CardTexts>
        </section>
    );
};

export default PlaceCard;
