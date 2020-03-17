import React, { useState, useEffect, Fragment } from "react";
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
import Logout from "./components/Logout";

import Recipies from "./components/Recipies";
import Dishes from "./components/Dishes";
// Styles imports
import "./styles/App.css";

export default function App() {
  const [dishes, setDishes] = useState("");
  const [login, setLogin] = useState("");

  const handleChange = e => {
    let display = e.target.value;
    console.log(e.target.value);
    setDishes(display);
  };

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
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  useEffect(() => {
    checkAuth();
    initGoogleLogin();
  }, []);

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
          {login ? (
            <Fragment>
              <Logout onClick={signOut} /> <Recipies onClick={handleChange} />
            </Fragment>
          ) : (
            <Fragment>
              <Login onClick={logInGoogle} />
              <Redirect to="/recipies" onClick={signOut}></Redirect>
            </Fragment>
          )}
        </Route>
        <Route path="/recipies/:id">
          {dishes ? (
            <Dishes props={dishes} />
          ) : (
            <Redirect from="/recipies/:id" to="/recipies" />
          )}
        </Route>
      </Switch>
    </Router>
  );
}
