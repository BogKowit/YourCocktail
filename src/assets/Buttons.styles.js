import styled from "styled-components";

export const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 14px;
  font-weight: 00;
  width: 40%;
  height: 40px;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  cursor: pointer;
  margin: 10px 0;

  &:focus,
  :hover {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    text-shadow: 2px 2px 6px #00000040;
    color: #00000095;
    outline: none;
  }
`;

