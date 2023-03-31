import React from "react";
import {Link} from 'react-router-dom'
import "./BeerCard.css"

const BeersCard = ({image, name, tagline, id}) => {

  return (
    <Link to={`/details/${id}`}>
      <div className="beersCard">
          {![1, 3, 11, 21, 20, 24].includes(Number(id)) ? (
          <div className="beersImageLarge">
            <img src={image} alt="name"></img>
          </div>
          ) : (
          <div className="beersImageSmall">
            <img src={image} alt="name"></img>
          </div>
          )}
          <div className="cardInformation">
            <h3 className="nameBeer">{name}</h3>
            <p className="taglineBeer">{tagline}</p>
          </div>
      </div>
    </Link>
  );
}

export default BeersCard;
