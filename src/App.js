import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Media from "./components/Media";

export default function App() {
  return (
    <Router basename="/react-test-app">
      <div>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/media">
            <Media />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Menu() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/media">Media</Link>
      </li>
    </ul>
  );
}
