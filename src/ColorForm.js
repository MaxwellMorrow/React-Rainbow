import React, { useState } from "react";

function ColorForm(props) {
  // we have our input set as an empty string onload
  let [input, setInput] = useState("");

  const handleSubmit = (e) => {
    // We still want to eliminate the default behavior of our form submittal
    e.preventDefault();
    //calling on our addColor function we passed in as a prop ads our input color into the colors array data
    props.addColor(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default ColorForm;
