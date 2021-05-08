import React, {useState} from 'react';
import { Panel, Wrapper } from '../../assets/template.styles';
import axios from 'axios';
import { Button } from '../../assets/Buttons.styles';
import styled from 'styled-components';
import { object } from 'prop-types';
import { Welcome } from '../../assets/Login.style';


  const DrinkPicture = styled.img`
  width: 200px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid grey;
  `

  const WrapperIngredient = styled.div`
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 10px 2px;
    border-radius: 10px;
    margin: 5px;
    border: 1px solid grey;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    &>p{
      margin: 0;
      text-align: center;
    }
  `;
  const WhatACocktail = styled.p`
    font-size: 162px;
    margin: 40px;
    color:red;
  `
  const HowToDo = styled.p`
    margin: 0 20px;
    width: 300px;
    text-align: center;
    margin: 10px;
    @media (max-width: 440px) {
      width: 300px;
    }
    @media (max-width: 300px){
      width: 200px;
    }
  `;
  const WrapperAllIngredients = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width: 520px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 460px) {
      grid-template-columns: 1fr 1fr;
    }
  `;

  const PanelTwo = styled(Panel)`
    display: flex;
    overflow-y: scroll;
    @media (max-width: 440px) {
      width: 320px;
    }
    @media (max-width: 300px) {
      width: 200px;
    }
  `;

  const IngredientPhoto = styled.img`
    width: 100px;
  `

  const DrinkName = styled.p`
  font-weight: bold;
  margin: 10px 0;
  `


const WrapperIngredients = ({ src, ingredient, measure }) => {
  return (
    <>
      {ingredient ? (
        <WrapperIngredient>
          <IngredientPhoto src={src} alt="Logo" />
          <p>składnik:</p>
          <p>{ingredient}</p>
          <p>proporcje:</p>
          <p>{measure}</p>
        </WrapperIngredient>
      ) : null}
    </>
  );
};
const Board = () => {
  const [cocktail, setCocktail] = useState([]);

    const getRandomDrink = async name => {
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(response => {
        setCocktail(response.data.drinks[0])
      })}

      const Ingredient1Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient1}-Small.png`;
      const Ingredient2Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient2}-Small.png`;
      const Ingredient3Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient3}-Small.png`;
      const Ingredient4Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient4}-Small.png`;
      const Ingredient5Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient5}-Small.png`;
      const Ingredient6Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient6}-Small.png`;
      const Ingredient7Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient7}-Small.png`;
      const Ingredient8Photo = `http://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient8}-Small.png`;

  return (
    <Wrapper>
      <PanelTwo>
        <Welcome>Twój drink na dziś</Welcome>
        {cocktail.strDrinkThumb ? (
          <DrinkPicture src={cocktail.strDrinkThumb} alt="Logo" />
        ) : (
          <WhatACocktail>?</WhatACocktail>
        )}
        <Welcome>Nazwa drinka:</Welcome>
        <DrinkName>{cocktail.strDrink}</DrinkName>
        {cocktail.strDrink ? (
        <Welcome>Sposób przygotowania</Welcome> )
        : null}
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
        <Button onClick={(e) => getRandomDrink(e)}>Drink na dziś</Button>
      </PanelTwo>
    </Wrapper>
  );
}

export default Board;
