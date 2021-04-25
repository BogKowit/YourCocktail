import React from 'react';
import {StyledLink, Wrapper} from './Navigation.style'

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="./login" activeClassName="active-link">
        Main
      </StyledLink>
      <StyledLink to="./adminHome" activeClassName="active-link">
        Admin
      </StyledLink>
      <StyledLink to="./userHome" activeClassName="active-link">
        User
      </StyledLink>
      <StyledLink to="./board" activeClassName="active-link">
        Board
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;