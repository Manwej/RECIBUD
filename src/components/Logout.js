import React from "react";
//components
import "../styles/App.css";
import Button from "react-bootstrap/Button";

export default function Logout(props) {
  return (
    <div className="logout">
      <Button onClick={props.onClick}>Log out</Button>
    </div>
  );
}
