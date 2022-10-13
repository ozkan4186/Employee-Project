import React, { useState } from "react";
import "./App.css";
import Cards from "./components/card/Cards";
import data from "./helper/data.js";




const App = () => {
  console.log(data);

const [index,setIndex]=useState(0)

const prew = () => {
  if (index > 4) {
    setIndex(index - 5)
  }
  if (index < 5) {
    setIndex(15);
  }

};

const next = () => {
  if (index < 15) {
    setIndex(index + 5)
  }
  if (index > 14) {
    setIndex(0)
  }

};











  return (
    <div className="App">
    <h1 className=" text-center bg bg-danger  " >EMPLOYEE LİST</h1>
<h4 className="text-center" > Employes {index} to {index+5} </h4>
{data.slice(index,index +5).map((item)=>{
  return <Cards {...item} key={item.id} />
})}
< span >
<button onClick={prew} className="btn btn-danger m-3 "  >PREV</button>
</span>
<span  >
<button  onClick={next}  className="btn btn-info" >NEXT</button>
</span>

    </div>
    
    
    
    
    
    
    
    
    
    
    
    
  )
}

export default App