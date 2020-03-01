import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Media from "./components/Media";
import Secret from "./components/Secret";

import "./App.css";
import logo from "./logo.svg";

const subpages = ["About", "Media", "Secret", "Login", "Signup"];

function Menu() {
  return (
    <nav id="menu">
      <Link to="/">
        <img src={logo} alt="home" width="100px" />
      </Link>
      <ul>
        {subpages.map((page, i) => (
          <li key={i}>
            <Link to={"/" + page}>{page}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasLoggedIn: false, userId: 0, isAnon: false };
  }

  render() {
    return (
      <Router basename="/react-test-app">
        <Menu />
        <div id="pageContainer">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/media">
              <Media />
            </Route>
            <Route path="/secret" {...this.state}>
              <Secret />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
