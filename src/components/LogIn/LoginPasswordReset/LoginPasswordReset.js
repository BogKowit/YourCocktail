import React from "react";
import { WrapperDiv, LinkTo, Button, Welcome } from "./LoginPasswordReset.style";

const LoginPasswordReset = () => {
  return (
    <>
      <Welcome>Rejestracja hasła</Welcome>
        <p>Wpisz nazwę użytkownika</p>
        <p>Wpisz hasło</p>
        <p>W razie problemów skontaktuj się z nami</p>
        <p>Tutaj Link do kontaktu</p>
      <Button> Zarejestruj </Button>
    </>
  );
};

export default LoginPasswordReset;
