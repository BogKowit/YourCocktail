import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  body {
    box-sizing: border-box;
    height: 100%;
    background: linear-gradient(222deg, rgba(34,193,195,1) 0%, rgba(235,45,253,1) 100%);
  }
  .react-icons {
  vertical-align: middle;
  width: 25px;
  height: 25px;
}
`;

export default GlobalStyle;