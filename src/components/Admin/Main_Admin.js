import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Admin from "./Admin";
import Sidebar from "./Sidebar";
import './Admin.css';

export class Main_Admin extends Component {
  render() {
    return (
      <Router>
        <div class="wrapper ">
          <Sidebar />
          <Admin />
        </div>
      </Router>
    );
  }
}

export default Main_Admin;
