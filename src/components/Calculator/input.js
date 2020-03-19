import React from "react";

export default function Input(props) {
  // console.log("input", props);

  const handleChange = event => {
    if (event.target.value.length % 2 === 1) {
      // props.setInputString(event.target.value);
      props.setInputString(event.target.value);
    }
  };

  return (
    <>
      <div className="inputOuter">
        input
        <input
          className="input"
          type="text"
          defaultValue={props.inputString}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
