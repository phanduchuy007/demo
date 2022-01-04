import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <>
        <Link to="/post_management">Post management</Link>
        <Link to="/feedback">Phản hồi</Link>
      </>
    );
  }
}

export default Header;
