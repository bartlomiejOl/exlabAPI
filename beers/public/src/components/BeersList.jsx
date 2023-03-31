import React from "react";
import BeersCard from "./BeerCard";
import "./BeersList.css"

const BeersList = ({beersData}) => {
  return(
    <div className="beersList">
      {beersData.map((beer,index) => {
        return (
          <BeersCard
            key={index}
            image={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
            id={beer.id}
          />
        );
      })}
    </div>
  )
};

export default BeersList