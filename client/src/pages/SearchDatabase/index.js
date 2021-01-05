import React, { Component } from "react";
import "react-bootstrap";
import "./style.css";

class Home extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  render() {
    return (
        <>
        THIS IS THE SEARCH DATABASE PAGE
        {/* A bunch of input forms to search by */}
        </>
    );
  }
}

export default Home;