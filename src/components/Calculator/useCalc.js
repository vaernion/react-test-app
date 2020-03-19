import { useEffect } from "react";

export default function useCalc(string, callback) {
  // take string input elementary arithmetic
  // run callback function with sum as argument
  useEffect(() => {
    let arr = operationArrFromString(string);
    let sum = solveArr(arr);
    callback(sum);
    console.log("calc", "input", string, "output", sum);
  }, [string, callback]);
}

function operationArrFromString(string) {
  // convert a string of user input math problem into array
  let arr = Array.from(string);
  // prepare array for calculator functions
  let arrParsed = arrParser(arr);
  return arrParsed;
}

function arrParser(arr) {
  // convert array of multiple single digit or operator strings to array of alternating numbers and operators
  // input [<string>,<string>,<operator>,<string>,<string>,<string>,<operator>,<string>]
  // output [<number>,<operator>,<number>,<operator>,<number>...]
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    // ignore element if already pushed as concatenation
    if (isNum(arr[i]) && isNum(arr[i - 1])) {
      continue;
    }
    // if element is digit
    else if (isNum(arr[i])) {
      if (isNum(arr[i + 1])) {
        // concatenate multiple elements containing digits
        let conc = "";
        for (let j = i; j < arr.length; j++) {
          if (isNum(arr[j])) {
            conc += arr[j];
          } else {
            break;
          }
        }
        arr2.push(conc);
      }
      // push lone digits
      else if (!isNum(arr[i - 1])) {
        arr2.push(arr[i]);
      }
    }
    // push operator
    else if (isOperator(arr[i])) {
      // ignore consecutive operators
      if (isOperator(arr[i]) && isOperator(arr[i - 1])) {
        continue;
      }
      arr2.push(arr[i]);
    }
  }
  return arr2;

  function isNum(e) {
    let num = parseInt(e);
    return !isNaN(num) && typeof num === "number";
  }
  function isOperator(e) {
    return ["*", "/", "+", "-"].includes(e);
  }
}

function solveArr(arr) {
  let arrMultied = multArr(arr);
  let sum = addArr(arrMultied);
  return sum;
}

function multArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === "*") {
        arr.splice(j - 1, 3, arr[j - 1] * arr[j + 1]);
        break;
      } else if (arr[j] === "/") {
        arr.splice(j - 1, 3, arr[j - 1] / arr[j + 1]);
        break;
      }
    }
  }
  return arr;
}

function addArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === "+") {
        arr.splice(j - 1, 3, Number(arr[j - 1]) + Number(arr[j + 1]));
        break;
      } else if (arr[j] === "-") {
        arr.splice(j - 1, 3, Number(arr[j - 1]) - Number(arr[j + 1]));
        break;
      }
    }
  }
  return arr[0];
}
