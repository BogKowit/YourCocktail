import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  transition: all 0.3s ease-in-out;
  margin-left: 5px;
  &:hover,
  :focus {
    text-shadow: 4px 4px 6px #ffffff80;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
    outline: none;
  }
`;

export const LinkToMiddle = styled(LinkTo)`
  text-align: center;
`;

export const LinkWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 10px 5px 10px;
  margin: 5px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LinkWrapperFull =styled(LinkWrapper)`
  width: 200px;
  justify-content: center;
`

export const WrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
`;

export const Welcome = styled.p`
  opacity: 0.7;
  font-size: 20px;
  margin: 20px 0 18px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
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
