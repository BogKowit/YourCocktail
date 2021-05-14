import React from 'react';
import { WrapperIngredient,
IngredientPhoto } from './RandomCocktail.style'

const WrapperIngredients = ({ src, ingredient, measure }) => {
  return (
    <>
      {ingredient ? (
        <WrapperIngredient>
          <IngredientPhoto src={src} alt="Logo" />
          <p>ingredient:</p>
          <p>{ingredient}</p>
          {measure ? <p>proportions:</p> : null}
          <p>{measure}</p>
        </WrapperIngredient>
        ) : null}
    </>
  );
};

export default WrapperIngredients;