import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SearchDatabase from "./pages/SearchDatabase";
import GroupProjects from "./pages/GroupProjects";
import PersonalProjects from "./pages/PersonalProjects";

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search-database" component={SearchDatabase} />
          <Route exact path="/group-projects" component={GroupProjects} />
          <Route exact path="/personal-projects" component={PersonalProjects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
