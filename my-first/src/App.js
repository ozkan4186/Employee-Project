
import React, { useState } from "react";
import Cards from "./components/card/Card";
import data from "../../my-first/src/helper/data";

function App() {
  return (
    <>
      <div>
        <h1>Employee List</h1>
        {data.map((item) => {
          return <Cards {...item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export default App;