import React, {useState, useEffect, useMemo} from "react";
import axios from 'axios';
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";

const YourFavoriteCocktail = () => {
  const [favoriteCocktail, setFavoriteCocktail] = useState('')
  const [yourCocktail, setYourCocktail] = useState()
  const idUser = localStorage.getItem("data");

  useEffect(async () => {
      let favoriteDrinkId;

      await axios
        .get(`http://localhost:1337/dupas/${idUser}`)
        .then((response) => {
          console.log('res drink', response);
          favoriteDrinkId = response.data.favoriteDrink;
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${favoriteDrinkId}`,
          {
            headers: {},
          }
        )
        .then((response) => {
          setYourCocktail(response.data.drinks[0])
        })
        .catch((error) => {
          console.log(error);
        });
    }, [])

  console.log(yourCocktail);
  return (
    <>
      <p>{yourCocktail?.strDrink}</p>
      <p>{yourCocktail?.idDrink}</p>
      <ButtonRounded text="Back to login panel" link="/UserHome" />
    </>
  );
}

export default YourFavoriteCocktail;