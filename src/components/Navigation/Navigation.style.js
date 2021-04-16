import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: red;
  text-decoration: none;
  background: white;
  padding: 0 20px;
  &.active-link {
    color: green;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;