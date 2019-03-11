import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import axios from "axios";
import Users from "./Users";
import Things from "./Things";
import Nav from "./Nav";

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
      <HashRouter>
        <div id="main" className="container">
          <h1>Acme Favorites</h1>
          <Nav />
          <Route path="/users" render={() => <Users users={users} />} />
          <Route path="/things" render={() => <Things things={things} />} />
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
