import React from "react";

export default function Secret(props) {
  console.log(props);
  if (props.hasLoggedIn === true) {
    if (props.isAnon === false) {
      return <div>Secret area for {props.userId}</div>;
    } else {
      return <div>Secret area for anon</div>;
    }
  } else {
    return <div>You are not allowed here</div>;
  }
}
