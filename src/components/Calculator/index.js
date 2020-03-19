import React, { useState } from "react";
import Display from "./display";
import Input from "./input";
import "./style.css";
import useCalc from "./useCalc";

export default function Calculator() {
  const [sum, setSum] = useState();
  const [inputString, setInputString] = useState("5*12+6/2+85*2");
  useCalc(inputString, setSum);

  const [sum2, setSum2] = useState();
  const [inputString2, setInputString2] = useState("4-10*2");
  useCalc(inputString2, setSum2);

  return (
    <>
      <div className="calcHeader">
        <h3>Calculator</h3>
        Takes natural numbers, zero, and the four basic operators
      </div>
      <div className="calcBody">
        <Display value={sum} />
        <Input setInputString={setInputString} inputString={inputString} />
      </div>
      <div className="calcBody">
        <Display value={sum2} />
        <Input setInputString={setInputString2} inputString={inputString2} />
      </div>
    </>
  );
}
