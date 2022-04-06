import "./App.css";

import React, { useState } from "react";
// Make sure to import the component we just built:
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";

function App() {
  // this is preset data but utilizing the usestate react hook
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
  // function that adds a new color into our color array defined above
  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };
  // function to map our colors to the page key is required to avoid errors
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock
        // this is where we pass our colors data as a prop to be used in ColorBlock.js
        key={color}
        color={color}
      />
    );
  });

  // here is where we return our JSX code
  return (
    <div className="App">
      {
        // this references our map function above rendering the data into our ColorBlock
        colorMap
      }
      <ColorForm
        // passing our addcolor function as a prop to be used in ColorForm.js
        addColor={addColor}
      />
    </div>
  );
}

export default App;
