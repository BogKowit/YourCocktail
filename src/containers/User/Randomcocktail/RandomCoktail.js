import React, {useState } from "react";
import axios from "axios";
import { Welcome } from "../../../assets/Login.style";
import { DrinkPicture, WhatACocktail, HowToDo,
WrapperAllIngredients, DrinkName, Scroll} from './RandomCocktail.style'
import { ButtonClick, ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import WrapperIngredients from "./WrapperIngredients";

const Board = () => {
  const [cocktail, setCocktail] = useState([]);
  const [buttonText, setButtonText] = useState("Drink for today")

  const getRandomDrink = async () => {
    handlerNameButton();
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then((response) => {
        setCocktail(response.data.drinks[0]);
      });
  };

  const Ingredient1Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient1}-Small.png`;
  const Ingredient2Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient2}-Small.png`;
  const Ingredient3Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient3}-Small.png`;
  const Ingredient4Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient4}-Small.png`;
  const Ingredient5Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient5}-Small.png`;
  const Ingredient6Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient6}-Small.png`;
  const Ingredient7Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient7}-Small.png`;
  const Ingredient8Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient8}-Small.png`;

  const addToFavorite = async () => {
    const id = localStorage.getItem("data");
    const idDrink = cocktail.idDrink;
    await axios
      .put(`http://localhost:1337/dupas/${id}`, {
        favoriteDrink: idDrink,
      })
      .then(alert("Add to Favorite Cocktail"))
      .catch((error) => {
        console.log(error);
      });
  };

  const handlerNameButton = (text) => setButtonText("Another One");

  return (
    <>
      <Welcome>Your drink for today</Welcome>
      <Scroll>
      {cocktail.strDrinkThumb ? (
        <DrinkPicture src={cocktail.strDrinkThumb} alt="Logo" />
      ) : (
        <WhatACocktail>?</WhatACocktail>
      )}
        <Welcome>Name of the drink:</Welcome>
        <DrinkName>{cocktail.strDrink}</DrinkName>
        {cocktail.strDrink ? <Welcome>A method of preparing</Welcome> : null}
        <HowToDo>{cocktail.strInstructions}</HowToDo>
        <WrapperAllIngredients>
          <WrapperIngredients
            src={Ingredient1Photo}
            ingredient={cocktail.strIngredient1}
            measure={cocktail.strMeasure1}
          />
          <WrapperIngredients
            src={Ingredient2Photo}
            ingredient={cocktail.strIngredient2}
            measure={cocktail.strMeasure2}
          />
          <WrapperIngredients
            src={Ingredient3Photo}
            ingredient={cocktail.strIngredient3}
            measure={cocktail.strMeasure3}
          />
          <WrapperIngredients
            src={Ingredient4Photo}
            ingredient={cocktail.strIngredient4}
            measure={cocktail.strMeasure4}
          />
          <WrapperIngredients
            src={Ingredient5Photo}
            ingredient={cocktail.strIngredient5}
            measure={cocktail.strMeasure5}
          />
          <WrapperIngredients
            src={Ingredient6Photo}
            ingredient={cocktail.strIngredient6}
            measure={cocktail.strMeasure6}
          />
          <WrapperIngredients
            src={Ingredient7Photo}
            ingredient={cocktail.strIngredient7}
            measure={cocktail.strMeasure7}
          />
          <WrapperIngredients
            src={Ingredient8Photo}
            ingredient={cocktail.strIngredient8}
            measure={cocktail.strMeasure8}
          />
        </WrapperAllIngredients>
      </Scroll>
      <ButtonClick text="Add to favorite" onClick={(e)=>{addToFavorite(e)}} />
      <ButtonClick text={buttonText} onClick={(e) => {getRandomDrink(e)}} />
      <ButtonRounded text="Back to login panel" link="/UserHome" />
    </>
  );
};

export default Board;
