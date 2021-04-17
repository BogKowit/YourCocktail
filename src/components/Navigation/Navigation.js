import React from 'react';
import {StyledLink, Wrapper} from './Navigation.style'

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="./login" activeClassName="active-link">
        Main
      </StyledLink>
      <StyledLink to="./admin" activeClassName="active-link">
        Admin
      </StyledLink>
      <StyledLink to="./user" activeClassName="active-link">
        User
      </StyledLink>
      <StyledLink to="./board" activeClassName="active-link">
        Board
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;