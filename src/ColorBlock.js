import React from "react";
// our color data is passed in as a prop in app.js
function ColorBlock(props) {
  return (
    <div className="colorBlock" style={{ backgroundColor: props.color }}>
      <p>{props.color}</p>
    </div>
  );
}

// Do not forget to export your component once you have built it!
export default ColorBlock;
