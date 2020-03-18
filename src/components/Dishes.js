import React, { Fragment, useEffect, useState } from "react";
//styles
import "../styles/App.css";
import Container from "react-bootstrap/Container";
//components
import Dish from "./Dish";

export default function Dishes(props) {
  const [data, setData] = useState("");
  useEffect(() => {
    let url =
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet=" +
      `${props.match.params.id}` +
      "&number=10&offset=0&type=main%20course&query=dish";
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
  return (
    <Fragment>
      <Container>
        <div className="content-id">
          <div className="headline-id">
            Fantastic <br /> <span>{props.match.params.id}</span>
            <br />
            recipies
          </div>
          {data && (
            <Fragment>
              <div className="recipie">
                {data.results.map((recipie, index) => {
                  return (
                    <Dish
                      props={recipie}
                      key={index}
                      value={props.match.params.id}
                    />
                  );
                })}
              </div>
            </Fragment>
          )}
        </div>
      </Container>
    </Fragment>
  );
}
