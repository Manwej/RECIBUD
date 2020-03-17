import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//styles
import "../styles/App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Pumpkin from "../styles/pumpkin.png";
import Egg from "../styles/egg.png";
import Fish from "../styles/fisch.png";
import Meat from "../styles/meat.png";

export default function Recipies(props) {
  return (
    <Fragment>
      <Container className="container-ep">
        <div className="content-reci">
          <div className="headline">
            <span>Discover</span> Recipies
          </div>

          <Link to="/recipies/:id" className="section1">
            <div>
              <img src={Pumpkin} alt="img" className="pumpkin" />
            </div>
            <div>
              <button onClick={props.onClick} value="vegan">
                Vegan
              </button>
            </div>
          </Link>
          <Link to={"/recipies/vegetarian"} className="section2">
            <div>
              <img src={Egg} alt="img" className="egg" />
            </div>

            <div>
              <button onClick={props.onClick} value="vegetarian">
                Vegetarian
              </button>
            </div>
          </Link>
          <Link to="/recipies/fish" className="section1">
            <div>
              <img src={Fish} alt="img" className="fish" />
            </div>
            <div>
              <button value="fish" onClick={props.onClick}>
                Fish
              </button>
            </div>
          </Link>
          <Link to="/recipies/meat" className="section2">
            <div>
              <img src={Meat} alt="img" className="meat" />
            </div>

            <div>
              <button value="meat" onClick={props.onClick}>
                Meat
              </button>
            </div>
          </Link>
        </div>
      </Container>
    </Fragment>
  );
}
