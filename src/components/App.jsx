import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import LoginPanel from './LoginPanel/LoginPanel';
import Navigation from './Navigation/Navigation'
import LoginRegistration from './LoginPanel/LoginRegistration/LoginRegistration'
import LoginPasswordReset from './LoginPanel/LoginPasswordReset/LoginPasswordReset';
import LoginContact from './LoginPanel/LoginContact/LoginContact';
import Home from '../conteners/Home/Home'

import { createGlobalStyle } from "styled-components";
import { IconContext } from 'react-icons/lib';
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
`



const NotFound = () => {
  return(
    <>
      <h1>404 DUPA!!! coś poszło nie tak!!! 404</h1>
    </>
  )
}


export const UserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));

  return(
    <IconContext.Provider value={{ className: 'react-icons' }}>
    <UserContext.Provider value={{ user, setUser}}>
    <Router>
      <GlobalStyle />
      <Navigation />
        <Switch>
          <Route exact path='/'><Redirect to={user ? '/home' : '/login'} /></Route>
          <Route path='/home' ><Home /></Route>
          <Route path='/login' ><LoginPanel /></Route>
          <Route path='/register'><LoginRegistration /></Route>
          <Route path='/passwordReset'><LoginPasswordReset /></Route>
          <Route path='/contact'><LoginContact /></Route>
          <Route path='*' component={NotFound} />
        </Switch>
    </Router>
    </UserContext.Provider>
    </IconContext.Provider>
  )
}

export default App;
