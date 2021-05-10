import React, { useState } from "react";
import axios from "axios";
import { Button } from "../../../assets/Buttons.styles";
import { Welcome } from "../../../assets/Login.style";
import { DrinkPicture, WrapperIngredient, WhatACocktail, HowToDo,
WrapperAllIngredients, IngredientPhoto, DrinkName} from './RandomCocktail.style'

const WrapperIngredients = ({ src, ingredient, measure }) => {
  return (
    <>
      {ingredient ? (
        <WrapperIngredient>
          <IngredientPhoto src={src} alt="Logo" />
          <p>składnik:</p>
          <p>{ingredient}</p>
          {measure ? <p>proporcje:</p> : null}
          <p>{measure}</p>
        </WrapperIngredient>
      ) : null}
    </>
  );
};
const Board = () => {
  const [cocktail, setCocktail] = useState([]);

  const getRandomDrink = async (name) => {
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
    console.log(`http://localhost:1337/dupas/${id}`);
    await axios
      .put(`http://localhost:1337/dupas/${id}`, {
        favoriteDrink: idDrink,
      })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(cocktail);
  return (
    <>
      <Welcome>Twój drink na dziś</Welcome>
      {cocktail.strDrinkThumb ? (
        <DrinkPicture src={cocktail.strDrinkThumb} alt="Logo" />
      ) : (
        <WhatACocktail>?</WhatACocktail>
      )}
      <Welcome>Nazwa drinka:</Welcome>
      <DrinkName>{cocktail.strDrink}</DrinkName>
      {cocktail.strDrink ? <Welcome>Sposób przygotowania</Welcome> : null}
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
      <Button onClick={(e) => addToFavorite(e)}>Dodaj do ulbionych</Button>
      <Button onClick={(e) => getRandomDrink(e)}>Drink na dziś</Button>
    </>
  );
};

export default Board;
