import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//styles
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function Dish(props) {
  let linkurl = `/recipies/${props.value}/${props.props.id}`;
  return (
    <Fragment>
      <div className="imagecontainer">
        <Image
          src={"https://spoonacular.com/recipeImages/" + props.props.imageUrls}
          alt="img"
          thumbnail
        />
      </div>
      <div className="description">
        <h3>{props.props.title}</h3>
        <div>
          <p>{props.props.readyInMinutes} minutes</p>
          <p> not too tricky</p>
        </div>
        <Link to={linkurl}>
          <Button variant="outline-light">See Recipie</Button>
        </Link>
      </div>
    </Fragment>
  );
}
