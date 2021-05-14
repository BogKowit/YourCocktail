import React, { useState } from "react";
import { Welcome } from "../../../assets/Login.style";
import { Field } from "../../../components/SelectField/SelectField";
import {DrinkPicture, PhotoWrapper, FullWrapper, Ingredient, Scroll, ButtonFavorite,} from "./FindYourCocktail.style";
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { Button } from "../../../assets/Buttons.styles";
import axios from 'axios';
import { TopText } from "../../../components/Other/Other";

const FindYourCocktail = () => {
  const [cocktailsFinds, setCocktailsFinds] = useState([]);
  const [findCocktailValue, setFindCocktailValue] = useState({ value: "" });
  const [isLoading, setLoading] = useState(false);

  const getRandomDrink = async () => {
    setLoading(true);

    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${findCocktailValue.name}`
      )
      .then((response) => {
        setCocktailsFinds(response.data.drinks)
        setLoading(false);
      })
      .catch((response) => console.log(response))
      }

  const handleFormValue = (e) => {
    setFindCocktailValue({ [e.target.name]: e.target.value });
  };

    const addToFavorite = async (e, v) => {
      const id = localStorage.getItem("data");
      await axios
        .put(`http://localhost:1337/dupas/${id}`, {
          favoriteDrink: v.idDrink,
        })
        .then(alert("Add to Favorite Cocktail"))
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    <>
      <TopText text="Find your best Cocktail Broo" />
      <Field
        type="text"
        placeholder="Name of drink"
        value={setFindCocktailValue.value}
        name="name"
        label="Name of drink:"
        onChange={handleFormValue}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Scroll>
          {cocktailsFinds?.map((v, i) => (
            <FullWrapper key={i}>
              <PhotoWrapper>
                <Welcome>Name: {v.strDrink}</Welcome>
                <DrinkPicture src={v.strDrinkThumb} alt="Logo" />
                <ButtonFavorite onClick={(e) => addToFavorite(e, v)}>
                  Add to favorite
                </ButtonFavorite>
              </PhotoWrapper>
              <div>
                <p>Ingredients: </p>
                {v.strIngredient1 ? (
                  <Ingredient>{v.strIngredient1}</Ingredient>
                ) : null}
                {v.strIngredient2 ? (
                  <Ingredient>{v.strIngredient2}</Ingredient>
                ) : null}
                {v.strIngredient3 ? (
                  <Ingredient>{v.strIngredient3}</Ingredient>
                ) : null}
                {v.strIngredient4 ? (
                  <Ingredient>{v.strIngredient4}</Ingredient>
                ) : null}
                {v.strIngredient5 ? (
                  <Ingredient>{v.strIngredient5}</Ingredient>
                ) : null}
                {v.strIngredient6 ? (
                  <Ingredient>{v.strIngredient6}</Ingredient>
                ) : null}
                {v.strIngredient7 ? (
                  <Ingredient>{v.strIngredient7}</Ingredient>
                ) : null}
                {v.strIngredient8 ? (
                  <Ingredient>{v.strIngredient8}</Ingredient>
                ) : null}
              </div>
            </FullWrapper>
          ))}
        </Scroll>
      )}
      <Button onClick={getRandomDrink}>Find cocktails</Button>
      <ButtonRounded text="Back to main panel" link="/UserHome" />
    </>
  );
};

export default FindYourCocktail;