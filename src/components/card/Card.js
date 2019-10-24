import React from "react";
import "./card.css";
export const Card = porps => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${porps.monster.id}?set=set3&size=180x180`}
      />
      <h2>{porps.monster.name}</h2>
      <p>{porps.monster.email}</p>
    </div>
  );
};
