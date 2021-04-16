import React from 'react';
import {StyledLink, Wrapper} from './Navigation.style'

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="./LogIn" activeClassName="active-link">
        Main
      </StyledLink>
      <StyledLink to="./" activeClassName="active-link">
        Admin
      </StyledLink>
      <StyledLink to="./User.js" activeClassName="active-link">
        User
      </StyledLink>
      <StyledLink to="./Board.js" activeClassName="active-link">
        Board
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;