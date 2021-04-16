import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import Admin from './Admin/Admin';
import Board from './Board';
import LogIn from './LogIn/Login';
import User from './User';
import Navigation from './Navigation/Navigation'
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  body {
    box-sizing: border-box;
    height: 100%;
    background: linear-gradient(222deg, rgba(34,193,195,1) 0%, rgba(235,45,253,1) 100%);
  }
`
const NotFound = () => {
  return(
    <>
      <h1>404 DUPA 404</h1>
    </>
  )
}
/////////////////////////////////////////////////////////////

const startUserRegister = {
  name: "",
  password: "",
  eMail: "",
  phone:"",
  addInformation:""
}

////////////////////////////////////////////////////////////
const App = () => {

  const [userRegister, setUserRegister] = useState(startUserRegister)

  return(
    <>
    <GlobalStyle />
    <Router>
        <Navigation />
        <Switch>
          <Route patch='/LogIn' ><LogIn /></Route>
          <Route patch='/' ><Admin /></Route>
          {/* <Route patch='/User' component={User}>Profil Użytkownika</Route> */}
          {/* <Route patch='/user' component={User}>Dane Użytkownika</Route> */}
          {/* <Route patch='/board' component={Board}>Tablica</Route> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
    </Router>
    </>
  )
  }
export default App;
