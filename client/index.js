import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      things: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/users")
      .then(users => users.data)
      .then(users => this.setState({ users }))
      .then(() => axios.get("/api/things"))
      .then(things => things.data)
      .then(things => this.setState({ things }))
      .catch(ex => console.error(ex.message));
  }
  render() {
    const { users, things } = this.state;
    return (
      <div id="main" className="container">
        <h1>Acme Favorites</h1>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
