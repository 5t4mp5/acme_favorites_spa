import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Users from "./Users";
import Things from "./Things";

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
        <Users users={users} />
        <Things things={things} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
