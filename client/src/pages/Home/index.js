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
        {/* Maybe a component with pie charts */}
        THIS IS THE HOME PAGE
        </>
    );
  }
}

export default Home;