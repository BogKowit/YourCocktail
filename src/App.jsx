import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation'
import LoginPanel from './containers/Login/LoginSelect/LoginSelect';
import LoginRegistration from './containers/Login/Registration/LoginRegistration'
import LoginPasswordReset from './containers/Login/PasswordReset/LoginPasswordReset.js';
import LoginContact from './containers/Login/LoginContact/LoginContact.js';
import AdminHome from './containers/Admin/AdminHome/AdminHome';
import AdminCheckUsers from './containers/Admin/AdminCheckUsers/AdminCheckUsers';
import AdminMessage from './containers/Admin/AdminMessage/AdminMessage';
import AdminChangeUserStatus from './containers/Admin/AdminChangeStatusUser/AdminChangeStatusUser';
import Board from './containers/Board/Board';
import UserHome from './containers/User/UserHome/UserHome';
import UserData from './containers/User/UserData/UserData';
import NotFound from './components/Navigation/NotFound';
import GlobalStyle from './assets/global.style';
import { IconContext } from 'react-icons/lib';
export const UserContext = createContext(null);


//TODO: GLobalnie dla admina deleteuser

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('data'));
  console.log(user)

  return(
    <IconContext.Provider value={{ className: 'react-icons' }}>
    <UserContext.Provider value={{ user, setUser}}>
    <Router>
      <GlobalStyle />
      <Navigation />
        <Switch>
          <Route exact path='/'>
            <Redirect to={ user === 'admin' ? '/adminHome' : '/login'} />
            <Redirect to={ user === 'user' ? '/userHome' : '/login'} />
          </Route>
          <Route path='/login' ><LoginPanel /></Route>
          <Route path='/register'><LoginRegistration /></Route>
          <Route path='/passwordReset'><LoginPasswordReset /></Route>
          <Route path='/contact'><LoginContact /></Route>
          <Route path='/adminHome'><AdminHome /></Route>
          <Route path='/adminMessage'><AdminMessage /></Route>
          <Route path='/adminCheckUsers'><AdminCheckUsers /></Route>
          <Route path='/adminChangeUserStatus'><AdminChangeUserStatus /></Route>
          <Route path='/board'> <Board /></Route>
          <Route path='/userHome'><UserHome /></Route>
          <Route path='/userData'><UserData /></Route>
          <Route path='*' component={NotFound} />
        </Switch>
    </Router>
    </UserContext.Provider>
    </IconContext.Provider>
  )
}

export default App;

//FIXME: Zmienić Redirect by działał
//TODO: Dowiedzieć się jak i dorobić zabezpieczcenia