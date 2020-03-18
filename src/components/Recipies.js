import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//styles
import "../styles/App.css";
import Container from "react-bootstrap/Container";
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

          <Link to="/recipies/vegan" className="section section1">
            <div>
              <img src={Pumpkin} alt="img" className="pumpkin" />
            </div>
            <div>
              <p>Vegan</p>
            </div>
          </Link>
          <Link to="/recipies/vegetarian" className="section section2">
            <div>
              <img src={Egg} alt="img" className="egg" />
            </div>
            <div>
              <p>Vegetarian</p>
            </div>
          </Link>
          <Link to="/recipies/fish" className="section section1">
            <div>
              <img src={Fish} alt="img" className="fish" />
            </div>
            <div>
              <p>Fish</p>
            </div>
          </Link>
          <Link to="/recipies/meat" className="section section2">
            <div>
              <img src={Meat} alt="img" className="meat" />
            </div>
            <div>
              <p>Meat</p>
            </div>
          </Link>
        </div>
      </Container>
    </Fragment>
  );
}
