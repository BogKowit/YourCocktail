import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation'
//
import LoginPanel from './containers/Login/LoginSelect/LoginSelect';
import LoginRegistration from './containers/Login/Registration/LoginRegistration'
import LoginPasswordReset from './containers/Login/PasswordReset/LoginPasswordReset.js';
import LoginContact from './containers/Login/LoginContact/LoginContact.js';
//
import AdminHome from './containers/Admin/AdminHome/AdminHome';
import AdminMessage from './containers/Admin/AdminMessage/AdminMessage';
import AdminChangeUserStatus from './containers/Admin/AdminChangeStatusUser/AdminChangeStatusUser';
//
import UserHome from './containers/User/UserHome/UserHome';
import FindYourCocktail  from './containers/User/FindYourCocktail/FindYourCocktail';
import YourFavoriteCocktail from './containers/User/YourFavoriteCocktail/YourFavoriteCocktail'
import RandomCocktail from './containers/User/Randomcocktail/RandomCoktail'
//
import NotFound from './components/Navigation/NotFound';
import GlobalStyle from './assets/global.style';
import { IconContext } from 'react-icons/lib';
import { Wrapper, Panel } from './assets/template.styles';

const App = () => {
  const [data, setData] = useState(localStorage.getItem('status'))
  console.log(data)
  return(
    <IconContext.Provider value={{ className: 'react-icons' }}>
    <Router>
      <GlobalStyle />
      <Navigation />
      <Wrapper>
        <Panel>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/login' />
          </Route>
          <Route path='/login' >
            <Redirect to={data==='user'?'/userHome':'/login'} />
            <LoginPanel /></Route>
          <Route path='/register'><LoginRegistration /></Route>
          <Route path='/passwordReset'><LoginPasswordReset /></Route>
          <Route path='/contact'><LoginContact /></Route>
          <Route path='/adminHome'><AdminHome /></Route>
          <Route path='/adminMessage'>
            <Redirect to={data==='admin'?'/adminHome':'/login'} />
            <AdminMessage /></Route>
          <Route path='/adminChangeUserStatus'><AdminChangeUserStatus /></Route>
          <Route path='/userHome'><UserHome /></Route>
          <Route path='/findYourCocktail'><FindYourCocktail /></Route>
          <Route path='/yourFavoriteCocktail'><YourFavoriteCocktail /></Route>
          <Route path='/randomCocktail'><RandomCocktail /></Route>
          <Route path='*' component={NotFound} />
        </Switch>
        </Panel>
        </Wrapper>
    </Router>
    </IconContext.Provider>
  )
}

export default App;

//FIXME: Zmienić Redirect by działał
//TODO: Dowiedzieć się jak i dorobić zabezpieczcenia 