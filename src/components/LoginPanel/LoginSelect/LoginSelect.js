import React from 'react'
import {WrapperDiv, LinkTo, Button, Welcome } from "../../../assets/Login.style";
import SelectField from "../SelectField/SelectField";

const LoginSelect = () => {
  return (
    <>
      <Welcome> Witaj Użytkowniku</Welcome>
      <SelectField
        type="text"
        placeholder="Wprowadź nazwę"
        value="name"
        label="Nazwa:"
      />
      <SelectField
        type="password"
        placeholder="Wprowadź hasło"
        value="password"
        label="Hasło:"
      />
      <Button>Zaloguj</Button>
      <LinkTo to="/register">Zarejestruj użytkownika.</LinkTo>
      <WrapperDiv>
        <LinkTo to="/passwordReset">Zapomniałeś Hasła?</LinkTo>
        <LinkTo to="/contact">Skontaktuj się z nami!</LinkTo>
      </WrapperDiv>
    </>
  );
}

export default LoginSelect;