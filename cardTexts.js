import React from "react";
import Signo from "./more.svg";
import "./card.css";
import "./cardText.css";


const CardTexts = props => {
    return (
        < div className="card-title-content" >
            <header className="card-header">
                <h2 className="card-second-title-content">{props.cardTitle}</h2>
                <h1 className="card- first-title-content">{props.cardSubTitle}</h1>
            </header>
            <article className="card-article">
                <p className="card-text-content">{props.cardText}</p>
                <span className="contenedor-more-signo">
                    <i class="fa fa-plus"></i>
                </span>
                <div>
                    <a className="link-fotter" href="https://codepen.io/ChaeEunMi/pen/rNaQLRb">{props.cardLink}</a>
                </div>
            </article>
            {/* <div className="contenedor-signo-box">
                <img className="more" src={Signo} />
            </div> */}
        </div>
    );
}

export default CardTexts;
