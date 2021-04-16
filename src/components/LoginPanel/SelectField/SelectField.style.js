import styled from "styled-components";

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
`;

export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
  width: 72%;
  height: 30px;
  margin: 5px;
  padding-left: 20px;
  transition: all 0.3s ease-in-out;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 600;
  position: relative;

  &:focus,
  :hover {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    color: black;
    outline: none;
  }

  &:hover::placeholder {
    color: grey;
  }
  &:focus::placeholder {
    color: transparent;
  }
  &::placeholder {
    font-size: 12px;
    opacity: 0.8;
    color: rgba(255, 255, 255, 0.5);
  }
`;

