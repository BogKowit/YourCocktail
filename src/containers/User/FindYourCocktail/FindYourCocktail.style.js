import styled from "styled-components";

export const DrinkPicture = styled.img`
  width: 180px;
  margin-right: 20px;
  border: 1px solid grey;
  margin-bottom: 5px;
    @media (max-width: 520px) {
      margin: 0;
    }
`;
export const PhotoWrapper = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  margin: 0 30px 0 0;
  @media (max-width: 520px) {
    margin: 0;
    align-items: center;
  }
`;
export const FullWrapper = styled.li`
  display: flex;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 5px;
  padding: 0 0px 10px;
  border: 1px solid grey;
  border-radius: 5px;
  width: 98%;
  min-width: 400px;
  min-height: 250px;
  align-items:center;
  justify-content:center;
  @media (max-width: 520px) {
    flex-direction:column;
    align-items:center;
    min-width:0;
  }
`;

export const Ingredient = styled.p`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0;
  border: 1px solid grey;
  margin: 0;
  width: 200px;
  @media (max-width: 520px) {
  width: 150px;
  }
`;

export const Scroll = styled.ul`
  overflow-y: scroll;
  width: 100%;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  margin: 0;
  height: 370px;
  padding: 0;

`;

export const ButtonFavorite = styled.button`
  width: 180px;
  height: 50px;
  margin: 0 0 10px;
`;

