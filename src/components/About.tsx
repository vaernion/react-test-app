import React from "react";

export default function About() {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    setState((s) => s + 1);
    setState((s) => s + 1);
    setState((s) => s + 1);
  }, []);

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <div>About</div>
    </>
  );
}
