import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Media from "./components/Media";
import { Menu } from "./components/Menu";
import Secret from "./components/Secret";
import Signup from "./components/Signup";

export default class App extends React.Component {
  constructor(props: any) {
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
