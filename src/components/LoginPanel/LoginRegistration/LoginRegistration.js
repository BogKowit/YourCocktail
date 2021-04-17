import React from "react";
import {LinkTo, Button, Welcome } from "../../../assets/Login.style";
import { Panel2, Wrapper } from "../LoginPanel.style";
import SelectField from "../SelectField/SelectField";

const LoginRegistration = () => {
  return (
    <Wrapper>
      <Panel2>
        <Welcome>Panel Rejestracyjny</Welcome>
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
        <SelectField
          type="password"
          placeholder="Wprowadź ponownie hasło"
          value="password"
          label="Ponownie hasło:"
        />
        <SelectField
          type="text"
          placeholder="Wprowadź e-mail"
          value="email"
          label="E-mail kontaktowy:"
        />
        <Button> Zarejestruj </Button>
        <LinkTo to="login">Powrót do panelu Logowania</LinkTo>
      </Panel2>
    </Wrapper>
  );
};

export default LoginRegistration;
