import React, {useState, useEffect } from "react";
import axios from 'axios';
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { HowToDo, WrapperAllIngredients  } from "../Randomcocktail/RandomCocktail.style";
import WrapperIngredients from "../Randomcocktail/WrapperIngredients";
import { DrinkPicture } from "../FindYourCocktail/FindYourCocktail.style";
import { TopText } from "../../../components/Other/Other";
import { Scroll } from "./YourFavoriteCocktail.style"
import { Welcome } from "../../../assets/Login.style";

const YourFavoriteCocktail = () => {
  const [yourCocktail, setYourCocktail] = useState()
  const idUser = localStorage.getItem("data");

  useEffect(async () => {
      let favoriteDrinkId;

      await axios
        .get(`http://localhost:1337/dupas/${idUser}`)
        .then((response) => {
          favoriteDrinkId = response.data.favoriteDrink;
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${favoriteDrinkId}`
        )
        .then((response) => {
          setYourCocktail(response.data.drinks[0])
        })
        .catch((error) => {
          console.log(error);
        });
    }, [])

  const Ingredient1Photo = `http://www.thecocktaildb.com/images/ingredients/${yourCocktail?.strIngredient1}-Small.png`;
  const Ingredient2Photo = `http://www.thecocktaildb.com/images/ingredients/${yourCocktail?.strIngredient2}-Small.png`;
  const Ingredient3Photo = `http://www.thecocktaildb.com/images/ingredients/${yourCocktail?.strIngredient3}-Small.png`;
  const Ingredient4Photo = `http://www.thecocktaildb.com/images/ingredients/${yourCocktail?.strIngredient4}-Small.png`;
  const Ingredient5Photo = `http://www.thecocktaildb.com/images/ingredients/${yourCocktail?.strIngredient5}-Small.png`;
  const Ingredient6Photo = `http://www.thecocktaildb.com/images/ingredients/${yourCocktail?.strIngredient6}-Small.png`;
  const Ingredient7Photo = `http://www.thecocktaildb.com/images/ingredients/${yourCocktail?.strIngredient7}-Small.png`;
  const Ingredient8Photo = `http://www.thecocktaildb.com/images/ingredients/${yourCocktail?.strIngredient8}-Small.png`;
  return (
    <>
      <TopText text="Your favorite drink" />
      <Scroll>
        {yourCocktail?.strDrinkThumb ? (
          <DrinkPicture src={yourCocktail?.strDrinkThumb} alt="Logo" />
          ) : (
            <p> Have you added a cocktail to your favorites before? </p>
            )}
        {yourCocktail?.strDrink ? <p>Name of Drink:</p> : null}
        <Welcome>{yourCocktail?.strDrink}</Welcome>
        <HowToDo>{yourCocktail?.strInstructions}</HowToDo>
        {yourCocktail?.strIngredient1 ? <Welcome>Ingredients:</Welcome>:null}
        <WrapperAllIngredients>
          <WrapperIngredients
            src={Ingredient1Photo}
            ingredient={yourCocktail?.strIngredient1}
            measure={yourCocktail?.strMeasure1}
          />
          <WrapperIngredients
            src={Ingredient2Photo}
            ingredient={yourCocktail?.strIngredient2}
            measure={yourCocktail?.strMeasure2}
          />
          <WrapperIngredients
            src={Ingredient3Photo}
            ingredient={yourCocktail?.strIngredient3}
            measure={yourCocktail?.strMeasure3}
          />
          <WrapperIngredients
            src={Ingredient4Photo}
            ingredient={yourCocktail?.strIngredient4}
            measure={yourCocktail?.strMeasure4}
          />
          <WrapperIngredients
            src={Ingredient5Photo}
            ingredient={yourCocktail?.strIngredient5}
            measure={yourCocktail?.strMeasure5}
          />
          <WrapperIngredients
            src={Ingredient6Photo}
            ingredient={yourCocktail?.strIngredient6}
            measure={yourCocktail?.strMeasure6}
          />
          <WrapperIngredients
            src={Ingredient7Photo}
            ingredient={yourCocktail?.strIngredient7}
            measure={yourCocktail?.strMeasure7}
          />
          <WrapperIngredients
            src={Ingredient8Photo}
            ingredient={yourCocktail?.strIngredient8}
            measure={yourCocktail?.strMeasure8}
          />
        </WrapperAllIngredients>
      </Scroll>
      <ButtonRounded text="Back to login panel" link="/UserHome" />
    </>
  );
}

export default YourFavoriteCocktail;