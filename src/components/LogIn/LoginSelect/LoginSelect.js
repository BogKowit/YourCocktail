import React from 'react'
import { WrapperDiv, LinkTo, Button, Welcome } from "./LoginSelect.style";
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
      <LinkTo>Zarejestruj użytkownika.</LinkTo>
      <WrapperDiv>
        <LinkTo>Zapomniałeś Hasła?</LinkTo>
        <LinkTo>Skontaktuj się z nami!</LinkTo>
      </WrapperDiv>
    </>
  );
}

export default LoginSelect;