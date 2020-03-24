import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
//styles
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { FaHeart } from "react-icons/fa";
//firebase
import "../config";
import firebase from "firebase/app";
var db = firebase.firestore();

export default function Dish(props) {
  let linkurl = `/recipies/${props.value}/${props.props.id}`;
  const [favData, setFavData] = useState(null);

  const getMessages = () => {
    let num = props.props.id;
    let id = num.toString();
    db.collection("favs")
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setFavData(true);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  };
  useEffect(() => {
    getMessages();
  }, [favData]);
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
        {favData && <FaHeart className="heart" />}
      </div>
    </Fragment>
  );
}
