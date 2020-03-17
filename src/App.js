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
import Recipies from "./components/Recipies";
import Vegan from "./components/Vegan";
// Styles imports
import "./styles/App.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        {/* <Route exact path="/login">
          <Login />
        </Route> */}
        <Route exact path="/recipies">
          <Recipies></Recipies>
        </Route>

        <Route path="/recipies/vegan">
          <Vegan />
        </Route>
        <Route path="/recipies/vegetarian">
          <Vegan />
        </Route>
        <Route path="/recipies/fish">
          <Vegan />
        </Route>
        <Route path="/recipies/meat">
          <Vegan />
        </Route>

        <Route path="/hello">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
