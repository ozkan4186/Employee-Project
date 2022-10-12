import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Cards = ({ id, name, age, image, email }) => {
  return (
    <>
   <div className="container">
    <h4>(Employess {} to {} </h4>
    <img src={image} alt="" />
    <div>{name}</div>
    <div>{age}</div>
    <div>{email}</div>
    <span>
    <FaChevronLeft/>
    </span>
    <span>
    <FaChevronRight/>
    </span>

   </div>
      
      
      
      
    </>
  );
};

export default Cards;