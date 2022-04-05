import "./App.css";

import React, { useState } from "react";
// Make sure to import the component we just built:
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm"

function App() {
  let [colors, setColors] = useState([
    "violet",
    "blue",
    "lightblue",
    "green",
    "greenyellow",
    "yellow",
    "orange",
    "red",
  ]);

   const addColor = (newColor) => {
        setColors([...colors, newColor])
    }

  let colorMap = colors.map((color, i) => {
    return <ColorBlock key={color} color={color} />;
  });

  return <div className="App">{colorMap}
  <ColorForm addColor={addColor} />
  </div>;
  
}

export default App;

