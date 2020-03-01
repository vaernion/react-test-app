import React from "react";
import { Link } from "react-router-dom";
import bcrypt from "bcryptjs";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordHashed: "",
      saltRounds: 13
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleKeyPress = event => {
    if (event.key === "Enter") this.handleSubmit(event);
  };
  async handleSubmit(event) {
    event.preventDefault();
    // let username = this.state.username;
    let password = this.state.password;
    this.setState({ username: "", password: "" });
    this.hashPassword(password, this.state.saltRounds);
  }
  comparePassword() {
    bcrypt.compareSync(this.state.password, this.state.passwordHashed);
  }
  hashPassword(password, saltRounds) {
    // return bcrypt.hashSync(password, saltRounds);
    bcrypt
      .hash(password, saltRounds)
      .then(hash => this.setState({ passwordHashed: hash }))
      .then(console.log(this.state.passwordHashed));
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Link to="/signup">Signup</Link>
        <br />
        login form
        <br />
        <form onSubmit={this.handleSubmit} onKeyPress={this.handleKeyPress}>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            placeholder="username"
            autoFocus
          />
          <br />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="password"
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
