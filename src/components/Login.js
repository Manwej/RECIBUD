import React from "react";
//styles
import "../styles/App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Login(props) {
  return (
    <Container>
      <div className="login">
        <h2>Please Log in</h2>
        <Button onClick={props.onClick}>Log in with Google</Button>
      </div>
    </Container>
  );
}
