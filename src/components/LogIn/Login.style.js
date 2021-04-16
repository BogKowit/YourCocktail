import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Panel = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 300px;
  height: 350px;
  border-radius: 25px;
  box-shadow: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
  font-family: "Montserrat", sans-serif;
  color: white;
`;

export const LinkTo = styled.a`
  text-decoration: none;
  color: #ddd;
  font-size: 12px;
  margin-top: 12px;
  &:hover,
  :hover {
    text-shadow: 2px 2px 6px #00000040;
    cursor: pointer;
  }
`;
export const ButtonSingIn = styled.button`
  background-color: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 14px;
  font-weight: 00;
  width: 40%;
  height: 12%;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  cursor: pointer;
  &:focus,
  :hover {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    text-shadow: 2px 2px 6px #00000040;
    color: black;
    outline: none;
  }
`;

export const Welcome = styled.p`
  opacity: 0.7;
  font-size: 20px;
  margin: 40px 0 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
