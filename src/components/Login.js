import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";
import React, { Fragment, useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "../config";
import firebase from "firebase/app";
import "firebase/auth";

// styles

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePW = e => {
    setPassword(e.target.value);
  };
  const logInGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
  };
  const logInEmail = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        alert("user does not exist, please signup");
        console.log(error);
      });
    console.log(user);
  };
  const signUpEmail = e => {
    e.preventDefault();
    console.log(user);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log(error);

        var errorCode = error.code;
        var errorMessage = error.message;
      });
    console.log(user);
  };
  //   const checkAuth = () => {
  //     firebase.auth().onAuthStateChanged(function(user) {
  //       if (user) {
  //         setUser(user);
  //       }
  //     });
  //   };

  const initGoogleLogin = e => {
    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        setUser(result.user);
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
    // checkAuth();
    initGoogleLogin();
  }, []);
  return (
    <Fragment>
      {/* {user && <Redirect to="/hello"></Redirect>} */}
      <Container className="container-ep">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChangeEmail}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChangePW}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={e => logInEmail(e)}>
            Login
          </Button>
          <Button variant="primary" type="submit" onClick={e => signUpEmail(e)}>
            Signup
          </Button>

          <p>---Or---</p>
          <Button onClick={logInGoogle}>Log in with Google</Button>
        </Form>
      </Container>
    </Fragment>
  );
}
