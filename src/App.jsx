import React from "react";
import Basket from "./Basket";
import Worker from "./Worker";

function App() {
  return (
    <React.Fragment>
      <Basket />
      <div style={{ display: "flex" }}>
        <Worker name="frontend developer" />
        <Worker name="backend developer" />
        <Worker name="devops" />
      </div>
    </React.Fragment>
  );
}

export default App;
