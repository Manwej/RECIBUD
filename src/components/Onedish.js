import React, { Fragment, useEffect, useState } from "react";
//styles
import "../styles/App.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import "../config";
import firebase from "firebase/app";
var db = firebase.firestore();

export default function Onedish(props) {
  const [data, setData] = useState("");
  console.log(props);
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
        setData(result);
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);
  let ingredients = data.extendedIngredients;

  const onChange = e => {
    let val = e.target.value;

    //console.log(e.target);
    console.log(e.target.checked);

    if (e.target.checked) {
      markFav();
    } else {
      db.collection("favs")
        .doc(props.match.params.id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    }
  };
  const markFav = () => {
    const { displayName, email } = props.user;
    // Add a new document in collection "cities"
    db.collection("favs")
      .doc(props.match.params.id)
      .set({
        displayName,
        email,
        title: data.title,
        img: data.image,
        prep: data.readyInMinutes,
        cusine: data.cuisines,
        healthScore: data.healthScore,
        ingredients: ingredients
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };
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
            <div className="favorite">
              <label htmlFor="checkbox">Pick as favorite</label>
              <input
                type="checkbox"
                id="checkbox"
                name="favorite"
                value="fav"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="ingredients">
            <ul>
              <h3>Ingredients:</h3>
              {ingredients.map((ing, index) => {
                return <li key={index}>{ing.original}</li>;
              })}
            </ul>
          </div>
        </Container>
      )}
    </Fragment>
  );
}
