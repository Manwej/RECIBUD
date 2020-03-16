import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// styles import
import "../styles/App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Logo from "../styles/Logo.png";

export default function Landing() {
  const [quote, setQuote] = useState(null);
  const getQuote = () => {
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(res => {
        return res.json();
      })
      .then(result => {
        setQuote(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);
  return (
    <Fragment>
      <Container className="background">
        <img src={Logo} alt="logo" className="logoLanding" />
        <p>{quote}</p>
        <p>Ron Swanson</p>
        <Link to="/recipies">
          <Button>Start Exploring now</Button>
        </Link>
      </Container>
    </Fragment>
  );
}
