import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: #ddd;
  font-size: 12px;
  margin-top: 12px;
  transition: all 0.3s ease-in-out;

  &:hover,
  :focus {
    text-shadow: 4px 4px 6px #ffffff80;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
  }
`;
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
  &:focus,
  :hover {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    text-shadow: 2px 2px 6px #00000040;
    color: #00000095;
    outline: none;
  }
`;

export const Welcome = styled.p`
  opacity: 0.7;
  font-size: 20px;
  margin: 40px 0 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const WrapperDiv = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

export const Text = styled.p`
  width: 80%;
  font-size: 12px;
  margin: 6px;
  padding: 4px;
`;
export const Info = styled.p`
  width: 80%;
  font-size: 12px;
`;
