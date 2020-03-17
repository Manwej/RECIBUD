import React from "react";
import "../styles/App.css";
import LoginIcon from "../styles/Icon_user.png";

import Button from "react-bootstrap/Button";

export default function Logout(props) {
  return (
    <div className="logout">
      <Button onClick={props.onClick}>Log out</Button>
    </div>
  );
}
