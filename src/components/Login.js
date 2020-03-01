import React from "react";
// import { Link } from "react-router-dom";
import bcrypt from "bcryptjs";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hash: "",
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
  handleSubmit = event => {
    event.preventDefault();
    // let username = this.state.username;
    let password = this.state.password;
    this.setState({ username: "", password: "" });
    this.hashPassword(password, this.state.saltRounds);
  };
  comparePassword() {
    bcrypt.compareSync(this.state.password, this.state.hash);
  }
  hashPassword(password, saltRounds) {
    // return bcrypt.hashSync(password, saltRounds);
    bcrypt
      .hash(password, saltRounds)
      .then(hash => this.setState({ hash: hash }))
      .then(console.log(this.state.hash));
  }
  render() {
    console.log(this.state);
    return (
      <div>
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
        <div>
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
