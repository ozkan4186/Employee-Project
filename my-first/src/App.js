import React, { useState } from "react";
import Button from "./components/button/Button";
import Cards from "./components/card/Card";
import data from "./helper/data";
import "./components/card/Card.css";

function App(props) {
  const [count,setCount] =useState(0);

  const prew=()=>{

    setCount(count=count-1)
    console.log(prew);
  }
   const next = () => {
     setCount(count = count + 1)
     console.log(next);
   }
  
  return (
    <>
      <div className="container text-center bg-white">
        <h1>Employee List</h1>
        <h4>
          (Employess {1} to {5})
        </h4>
        {data.slice(0, 5).map((item) => {
          return <Cards {...item} key={item.id} />;
        })}
        <Button />
         <span>
   <FaChevronLeft  onClick={prew} className="fs-3 text-success" />
   Prev
 </span>
 <span>
   Next
   <FaChevronRight  onClick={next} className="fs-3 text-success" />
 </span>
      </div>
    </>
    
  );
}

export default App;