import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-bootstrap";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg mb-2">
        <Link className="navbar-brand" to="/">
          WPR Helpdesk
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              onClick={this.toggleNav}
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
              to="/search-database"
            >
              Search the Database
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={this.toggleNav}
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
              to="/group-projects"
            >
              Group Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={this.toggleNav}
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
              to="/personal-projects"
            >
              Personal Projects
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
