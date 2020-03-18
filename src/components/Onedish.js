import React, { Fragment, useEffect, useState } from "react";
//styles
import "../styles/App.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export default function Onedish(props) {
  const [data, setData] = useState("");
  useEffect(() => {
    let url =
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
      `${props.match.params.id}` +
      "/information";
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "90f7d58a63msh77b0aa26ce66d18p1f84afjsnc4d1f9916f9f"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        setData(result);
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);
  let ingredients = data.extendedIngredients;
  console.log(ingredients);
  return (
    <Fragment>
      {data && (
        <Container className="onedish">
          <h2>{data.title}</h2>
          <div className="imagecontainer">
            <Image src={data.image} alt="img" thumbnail />
          </div>
          <div className="description-ondish">
            <div>
              <p> Preparation:{data.readyInMinutes} minutes</p>
              <p> Servings: {data.servings}</p>
              <p> Cuisine: {data.cuisines}</p>
              <p> Healthscore: {data.healthScore}/100</p>
            </div>
          </div>
          <div className="ingredients">
            <ul>
              <h3>Ingredients:</h3>
              {ingredients.map((ing, index) => {
                console.log(ing);
                return <li key={index}>{ing.original}</li>;
              })}
            </ul>
          </div>
        </Container>
      )}
    </Fragment>
  );
}
