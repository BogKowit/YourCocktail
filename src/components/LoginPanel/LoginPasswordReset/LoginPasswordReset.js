import React from "react";
import {LinkTo, Button, Welcome } from "../../../assets/Login.style";
import { Panel, Wrapper } from "../LoginPanel.style";
import SelectField from "../SelectField/SelectField";

const LoginPasswordReset = () => {
  return (
    <Wrapper>
    <Panel>
      <Welcome>Reset hasła</Welcome>
      <SelectField
        type="text"
        placeholder="Wprowadź nazwę"
        value="name"
        label="Wpisz nazwę użytkownika:"
      />
      <p></p>
      <SelectField
        type="text"
        placeholder="Wprowadź e-mail"
        value="name"
        label="Wpisz e-mail:"
      />
      <Button> Zmień Hasło </Button>
      <LinkTo to="login">Powrót do panelu Logowania</LinkTo>
      <LinkTo to="contact">Skontaktuj się z nami!</LinkTo>
    </Panel>
    </Wrapper>
  );
};

export default LoginPasswordReset;

