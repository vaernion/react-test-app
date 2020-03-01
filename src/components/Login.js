import React from "react";
import bcrypt from "bcryptjs";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hash: "",
      saltRounds: 13,
      usernameError: "",
      passwordError: "",
      submitError: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    let key = event.target.name;
    let value = event.target.value;
    let userErr = "";
    let passwordErr = "";
    if (key === "username" && value && !this.validateUsername(value)) {
      userErr = "invalid email";
    }
    if (key === "password" && value && !this.validatePassword(value)) {
      passwordErr = "length must be 10-64";
    }
    this.setState({ usernameError: userErr, passwordError: passwordErr });
    this.setState({ [event.target.name]: event.target.value });
  };
  handleKeyPress = event => {
    if (event.key === "Enter") this.handleSubmit(event);
  };
  handleSubmit = event => {
    event.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    this.setState({ username: "", password: "" });
    this.createUser(username, password);
    // // this.hashPassword(password, this.state.saltRounds);
    // bcrypt.hash(password, this.state.saltRounds, (err, hash) => {
    //   this.setState({ hash: hash });
    //   // .then(console.log(this.state.hash));
    // });
  };
  validateUsername(username) {
    let regex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    return regex.test(username);
  }
  validatePassword(password) {
    return password.length >= 10 && password.length <= 64;
  }
  comparePassword() {
    bcrypt.compareSync(this.state.password, this.state.hash);
  }
  createUser(username, password) {
    if (this.validateUsername(username) && this.validatePassword(password)) {
      bcrypt.hash(password, this.state.saltRounds, (err, hash) => {
        // this.setState({ hash: hash })
        let table = "users";
        let keys = ["username", "hash"];
        let values = [username, hash];
        let sql = `INSERT INTO ${table} (${keys.join(", ")}) VALUES ?`;
        console.log(sql, values);
        // db.query(sql, [values], (err, result) => {
        //   if (err) throw err;
        //   console.log(result.affectedRows);
        // });
      });
      // .then(console.log(this.state.hash));
    } else {
      this.setState({ submitError: "invalid input" });
      setTimeout(() => {
        this.setState({ submitError: "" });
      }, 3000);
    }
  }
  // hashPassword(password, saltRounds) {
  //   // return bcrypt.hashSync(password, saltRounds);
  //   bcrypt
  //     .hash(password, saltRounds)
  //     .then(hash => this.setState({ hash: hash }));
  // }
  render() {
    console.log(this.state);
    return (
      <div id="loginOuter">
        <div id="login">
          <form onSubmit={this.handleSubmit} onKeyPress={this.handleKeyPress}>
            login
            <br />
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              placeholder="username"
              autoFocus
            />
            <br />
            <span>{this.state.usernameError}</span>
            <br />
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              placeholder="password"
            />
            <br />
            <span>{this.state.passwordError}</span>
            <br />
            <button type="submit">submit</button>
            <br />
            <span>{this.state.submitError}</span>
          </form>
        </div>
        <div id="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            euismod risus sit amet odio blandit interdum. Curabitur accumsan
            mauris sit amet blandit feugiat. Etiam vehicula tincidunt sem, at
            scelerisque ligula fringilla ac. Quisque orci mi, vehicula varius
            augue non, ullamcorper cursus nulla. Quisque placerat libero at erat
            vulputate efficitur. Fusce vulputate felis lectus, ac sagittis
            turpis fringilla at. Vivamus metus orci, fringilla vel ante eu,
            vestibulum sollicitudin neque.
          </p>
          <p>
            Nunc nec ipsum a ipsum ullamcorper ullamcorper non a dolor. Nunc
            accumsan quam ut tortor ornare tempor. Donec odio urna, ornare a
            justo sit amet, vulputate pellentesque mauris. Donec at lacus at
            risus faucibus fermentum. Nunc ultricies, ex id porta pretium,
            ligula nisi dignissim tellus, et mattis nulla mauris sed nisl. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Donec a elit feugiat, scelerisque neque id,
            ultricies massa. Phasellus gravida sodales lectus venenatis
            molestie. Pellentesque commodo enim eros, ut congue magna cursus
            vitae.
          </p>
        </div>
      </div>
    );
  }
}
