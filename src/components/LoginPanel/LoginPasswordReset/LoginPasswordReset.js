import React from "react";
import { WrapperDiv, LinkTo, Button, Welcome } from "./LoginPasswordReset.style";
import SelectField from "../SelectField/SelectField";

const LoginPasswordReset = () => {
  return (
    <>
      <Welcome>Rejestracja hasła</Welcome>
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
      <LinkTo>Powrót do panelu Logowania</LinkTo>
      <LinkTo>Skontaktuj się z nami!</LinkTo>
    </>
  );
};

export default LoginPasswordReset;

