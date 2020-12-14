import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        This is a test
      </div>
    </Router>
  );
}

export default App;
