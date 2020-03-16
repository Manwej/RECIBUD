import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./config";
import firebase from "firebase/app";
import "firebase/auth";

//Components
import Landing from "./components/Landing";
import Login from "./components/Login";
// Styles imports
import Button from "react-bootstrap/Button";
import "./styles/App.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/recipies">
          <Login />
        </Route>

        <Route path="/recipies/:id">
          {/* {selectedSpot ? (
            <Infopage props={selectedSpot} user={user} />
          ) : (
            <Redirect from="/mapscreen/:id" to="/mapscreen" />
          )} */}
        </Route>

        <Route path="/hello">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
