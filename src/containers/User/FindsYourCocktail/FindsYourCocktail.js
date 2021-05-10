import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../../assets/Buttons.styles";
import { Welcome } from "../../../assets/Login.style";
import { SelectFieldRegistration } from "../../../components/SelectField/SelectField";
import { DrinkPicture , PhotoWrapper ,FullWrapper ,Ingredient } from "../FindsYourCocktail/FindYourCocktail.style"
import axios from 'axios';


const FindsYourCocktail = () =>{
  const [cocktailsFinds, setCocktailsFinds] = useState([])
  const [findCocktailValue, setFindCocktailValue] = useState({value:""})
  let history = useHistory();
  const getRandomDrink = async () => {
    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${findCocktailValue.name}`
      )
      .then((response) =>  setCocktailsFinds(response.data.drinks))
      .catch((response) => console.log(response));
  };
  // const Loop = ({v, int}) => {
  //   const loop = []
  //   for (let i = 1; i <= 8; i++) {
  //     const dupa = int
  //     loop.push(
  //       v.strIngredient+[i]
  //       ? (
  //         // <Ingredient>
  //         //   <p>{dupa.join([i])}</p>
  //         //   <p>{v.strMeasure1}</p>
  //         // </Ingredient>
  //       ) : null
  //       );
  //     }
  //   return loop
  // };

  const handleFormValue = (e) =>{
    setFindCocktailValue
    ({[e.target.name]:  e.target.value})
  }

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
            </PhotoWrapper>
            <div>
              <p>Ingredients: </p>
              {/* <Loop v={v} int={v.strIngredient} /> */}
              {/* <IngredientPanel
                int={v.strIngredient1}
                mes={v.strMeasure1}
              /> */}
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
      <Button onClick={history.push("/")} />
    </>
  );
}

export default FindsYourCocktail;