import React from "react";
import "./Card.css";

const Cards = ({ id, name, age, image, email }) => {
  return (
    <>
      <div className="card_style">
        <img src={image} alt="" />
        <div className="card_text">
          <div>{name}</div>
          <div>{age}</div>
          <div>{email}</div>
        </div>
      </div>
    </>
  );
};

export default Cards;