import LoginSelectField from "./LoginSelectField.js/SelectField";
import React from "react"
import {Wrapper, Panel, LinkTo, ButtonSingIn, Welcome} from "./Login.style"


const LogIn = () => {
  return (
    <>
      <Wrapper as="form">
        <Panel>
          <Welcome> Witaj Użytkowniku</Welcome>
          <LoginSelectField
            type="text"
            placeholder="Wprowadź nazwę"
            value="name"
            label="Nazwa:"
          />
          <LoginSelectField
            type="password"
            placeholder="Wprowadź hasło"
            value="password"
            label="Hasło:"
          />
          <ButtonSingIn>Zaloguj</ButtonSingIn>
          <LinkTo>Zapomniałeś Hasła?</LinkTo>
          <LinkTo>Skontaktuj się z nami.</LinkTo>
        </Panel>
      </Wrapper>
    </>
  );
}

export default LogIn;