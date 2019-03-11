import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Main extends Component{
    constructor(){
        super();
        this.state = {
            users: [],
            things: []
        }
    }
    render(){
        return (
            <div id="main">
                <h1>Acme Favorites</h1>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("app"));