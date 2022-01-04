import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <div
        className="sidebar"
        data-color="purple"
        data-background-color="white"
        data-image="../assets/img/sidebar-1.jpg"
      >
        {/*
  Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

  Tip 2: you can also add an image using data-image tag
*/}
        <div className="logo">
          <a
            className="simple-text logo-normal"
          >
            Admin
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item ">
              {/* <a className="nav-link" href="/">
                <i className="material-icons">person</i>
                <p>Manage user accounts</p>
              </a> */}
              <Link className="nav-link" to="/adminPage">
                <i className="material-icons">person</i>
                <p>Tài khoản member</p>
              </Link>
            </li>
            <li className="nav-item ">
              {/* <a className="nav-link" href="./tables.html">
                <i className="material-icons">content_paste</i>
                <p>Manage user posts</p>
              </a> */}
              <Link className="nav-link" to="/adminPage/post_management">
                <i className="material-icons">content_paste</i>
                <p>Bài đăng</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/adminPage/feedback">
                <i className="material-icons">library_books</i>
                <p>Phản hồi</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
