import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../../assets/Buttons.styles";
import { Welcome } from "../../../assets/Login.style";
import { SelectFieldRegistration } from "../../../components/SelectField/SelectField";
import { DrinkPicture , PhotoWrapper ,FullWrapper ,Ingredient } from "./FindYourCocktail.style"
import axios from 'axios';
import { ButtonClick, ButtonRounded } from "../../../components/RoundedButton/RoundedButton";


const FindYourCocktail = () => {
  const [cocktailsFinds, setCocktailsFinds] = useState([]);
  const [findCocktailValue, setFindCocktailValue] = useState({ value: "" });
    const [error, setError] = useState("");

  let history = useHistory();
  const getRandomDrink = async () => {
    findCocktailValue ? (
    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${findCocktailValue.name}`
      )
      .then((response) => setCocktailsFinds(response.data.drinks))
      .catch((response) => console.log(response)))
   : console.log("first schare");
      }
  // const Loop = ({v}) => {
  //   const loop = []
  //   for (let i = 1; i <= 8; i++) {
  //     const dupa = join(v.strIngredient, i)
  //     loop.push(
  //       v.strIngredient + [i] ? (
  //         <Ingredient>
  //           <p>{v.strIngredient1}</p>
  //           <p>{v.strMeasure1}</p>
  //         </Ingredient>
  //       ) : null
  //     );
  //     }
  //   return loop
  // };

  const handleFormValue = (e) => {
    setFindCocktailValue({ [e.target.name]: e.target.value });
  };

    const addToFavorite = async (e, v) => {
      const id = localStorage.getItem("data");
      console.log(v.idDrink)
      await axios
        .put(`http://localhost:1337/dupas/${id}`, {
          favoriteDrink: (v.idDrink),
        })
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error);
        });
    };


  return (
    <>
      <Welcome>Find your best drink Broo</Welcome>
      <SelectFieldRegistration
        type="text"
        placeholder="Wprowadź swoje imię"
        value={setFindCocktailValue.value}
        name="name"
        label="Imię:"
        onChange={handleFormValue}
      />
      <ul>
        {cocktailsFinds.map((v, i) => (
          <FullWrapper key={i}>
            <PhotoWrapper>
              <p>{v.strDrink}</p>
              <DrinkPicture src={v.strDrinkThumb} alt="Logo" />
              <button onClick={(e) => addToFavorite(e , v)} >Add to favorite</button>
            </PhotoWrapper>
            <div>
              <p>Ingredients: </p>
              {/* <Loop v={v}/> */}
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
      </ul>
      <Button onClick={getRandomDrink}>Find cocktails</Button>
      <ButtonRounded text="Back to main panel" link="/UserHome" />
    </>
  );
};

export default FindYourCocktail;