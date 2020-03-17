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
        <div className="content">
          <div className="half"></div>
          <img src={Logo} alt="logo" className="logoLanding" />
          <br></br>
          <p className="quote">{quote}</p>
          <p>
            <i>Ron Swanson</i>
          </p>
        </div>
        <div className="footer">
          <Link to="/recipies">
            <Button>Find amazing recipies</Button>
          </Link>
        </div>
      </Container>
    </Fragment>
  );
}
