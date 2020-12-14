import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-bootstrap";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg mb-2">
        <div className="navbar-brand" to="/">
          WPR Helpdesk
        </div>
      </nav>
    );
  }
}

export default Nav;
