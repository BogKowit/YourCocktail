import React from "react";
import { WrapperDiv, LinkTo, Button, Welcome } from "./LoginRegistration.style";
import SelectField from "../SelectField/SelectField";

const LoginRegistration = () => {
  return (
    <>
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
      <SelectField
        type="text"
        placeholder="Wprowadź numer telefonu"
        value="phone"
        label="Telefon kontaktowy"
      />
      <Button> Zarejestruj </Button>
    </>
  );
};

export default LoginRegistration;
