import React, { Fragment, useEffect, useState } from "react";

//styles
import "../styles/App.css";
import Container from "react-bootstrap/Container";

import Dish from "./Dish";
import "../config";
import firebase from "firebase/app";

var db = firebase.firestore();
export default function Vegan() {
  const [data, setData] = useState("");
  useEffect(() => {
    //   fetch(
    //     "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet=vegan&number=10&offset=0&type=main%20course&query=dish",
    //     {
    //       method: "GET",
    //       headers: {
    //         "x-rapidapi-host":
    //           "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    //         "x-rapidapi-key": "90f7d58a63msh77b0aa26ce66d18p1f84afjsnc4d1f9916f9f"
    //       }
    //     }
    //   )
    //     .then(response => {
    //       return response.json();
    //     })
    //     .then(result => {
    //       console.log(result);
    //       addData(result);
    //       //   setData(result);
    //       //   localStorage.setItem("data", result);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }, []);
    // const addData = obj => {
    //   // Add a new document in collection "cities"
    //   db.collection("recipies")
    //     .doc("vegan")
    //     .set(obj)
    //     .then(function() {
    //       console.log("Document successfully written!");
    //     })
    //     .catch(function(error) {
    //       console.error("Error writing document: ", error);
    //     });
    getData();
  }, []);
  const getData = () => {
    db.collection("recipies")
      .doc("vegan")
      .get()
      .then(doc => {
        let d = doc.data();
        setData(d);
        return d;
      });
  };
  console.log(data);
  return (
    <Fragment>
      <Container>
        <div className="content-id">
          <div className="headline-id">
            Healthy <br /> <span>Vegan</span>
          </div>
          {data && (
            <Fragment>
              <div className="recipie">
                {data.results.map((recipie, index) => {
                  return <Dish props={recipie} key={index} />;
                })}
              </div>
            </Fragment>
          )}
        </div>
      </Container>
    </Fragment>
  );
}
