import React, { useContext, useState } from 'react';
import {WrapperDiv, LinkTo, Button, Welcome } from "../../../assets/Login.style";
import SelectField from "../SelectField/SelectField";
import { login } from "../../../api/methods";
import { UserContext } from '../../App' ;

const LoginSelect = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(UserContext);

  const handleLogin = (event) =>{
    event.preventDefault();
    login(username, password).then((response) => setUser(response));
  }

  return (
    <>
      <Welcome> Witaj Użytkowniku</Welcome>
      <SelectField
        type="text"
        placeholder="Wprowadź nazwę"
        value="name"
        label="Nazwa:"
        onChange={(e) => setUsername(e.target.value)}
      />
      <SelectField
        type="password"
        placeholder="Wprowadź hasło"
        value="password"
        label="Hasło:"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={(e) => handleLogin(e)}>Zaloguj</Button>
      <LinkTo to="/register">Zarejestruj użytkownika.</LinkTo>
      <WrapperDiv>
        <LinkTo to="/passwordReset">Zapomniałeś Hasła?</LinkTo>
        <LinkTo to="/contact">Skontaktuj się z nami!</LinkTo>
      </WrapperDiv>
    </>
  );
}

export default LoginSelect;