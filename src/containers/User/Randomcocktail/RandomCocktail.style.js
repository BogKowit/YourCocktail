import styled from "styled-components";

export const DrinkPicture = styled.img`
  width: 200px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid grey;
`;

export const WrapperIngredient = styled.div`
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px 2px;
  border-radius: 10px;
  margin: 5px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > p {
    margin: 0;
    text-align: center;
  }
`;
export const WhatACocktail = styled.p`
  font-size: 162px;
  margin: 40px;
  color: red;
`;
export const HowToDo = styled.p`
  margin: 0 20px;
  width: 300px;
  text-align: center;
  margin: 10px;
  @media (max-width: 440px) {
    width: 280px;
  }
  @media (max-width: 300px) {
    width: 200px;
  }
`;
export const WrapperAllIngredients = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 520px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 460px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const IngredientPhoto = styled.img`
  width: 100px;
`;

export const DrinkName = styled.p`
  font-weight: bold;
  margin: 10px 0;
`;
