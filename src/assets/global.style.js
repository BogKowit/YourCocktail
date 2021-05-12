import styled, { createGlobalStyle } from "styled-components";

  // const random1 = () => Math.floor(Math.random() * 255) + 1;
  // const random2 = () => Math.floor(Math.random() * 255) + 1;
  // const random3 = () => Math.floor(Math.random() * 255) + 1;
  // const randomRgba = () => `rgba(${random1()}, ${random2()}, ${random3()},1)`;
  // setInterval(function () {
  //   console.log(randomRgba());
  // }, 9000);

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  html {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: linear-gradient(222deg,
        rgba(34,193,195,1) 0%,
        rgba(235,45,253,1) 100%);
    display: flex;
    align-items:center;
    justify-content:center;
    font-family: "Montserrat", sans-serif;
  }
  ul, li{
    list-style: none;
  }
  *, *::after, *::before{
    box-sizing: inherit;
  }
  .react-icons {
  vertical-align: middle;
  width: 25px;
  height: 25px;
}
`;

export default GlobalStyle;