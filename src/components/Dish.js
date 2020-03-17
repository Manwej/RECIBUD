import React, { Fragment } from "react";
import Image from "react-bootstrap/Image";

export default function Dish(props) {
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
      </div>
    </Fragment>
  );
}
