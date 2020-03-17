import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//styles
import "../styles/App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Recipies() {
  return (
    <Fragment>
      <Container className="container-ep">
        <div className="content-reci">
          <div className="headline">
            <span>Discover</span> Recipies
          </div>
          <Link to="/recipies/vegan" className="section1">
            <div>
              <img src="" alt="img" />
            </div>
            <div>
              <p>Vegan</p>
            </div>
          </Link>
          <Link to="/recipies/vegetarian" className="section2">
            <div>
              <img src="" alt="img" />
            </div>

            <div>
              <p>Vegetarian</p>
            </div>
          </Link>
          <Link to="/recipies/fish" className="section1">
            <div>
              <img src="" alt="img" />
            </div>

            <div>
              <p>Fish</p>
            </div>
          </Link>
          <Link to="/recipies/meat" className="section2">
            <div>
              <img src="" alt="img" />
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
