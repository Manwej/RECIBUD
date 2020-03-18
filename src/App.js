import React, { useState, useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
//Firebase
import "../config";
import firebase from "firebase/app";
import "firebase/auth";
//Components
import Landing from "./components/Landing";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Recipies from "./components/Recipies";
import Dishes from "./components/Dishes";
import Onedish from "./components/Onedish";

// Styles imports
import "./styles/App.css";

export default function App() {
  const [login, setLogin] = useState("");

  const logInGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
  };
  const checkAuth = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("logged in");
        console.log(user);
        setLogin(user);
      } else {
        console.log("logged out auth");
        console.log(login);
      }
    });
  };
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log("logged out");
        console.log(login);
        setLogin(false);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  const initGoogleLogin = e => {
    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        //setUser(result.user);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  useEffect(() => {
    checkAuth();
    initGoogleLogin();
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/recipies">
          {login ? (
            <Fragment>
              <Logout onClick={signOut} /> <Recipies />
            </Fragment>
          ) : (
            <Fragment>
              <Login onClick={logInGoogle} />
              <Redirect to="/recipies"></Redirect>
            </Fragment>
          )}
        </Route>
        <Route exact path="/recipies/:id" component={Dishes} />
        <Route exact path="/recipies/:id/:id" component={Onedish} />
      </Switch>
    </Router>
  );
}
