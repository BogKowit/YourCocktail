import React from "react";
import {LinkTo, Welcome } from "../../../assets/Login.style";
import { PanelResetPassword, Wrapper } from "../../../assets/template.styles";
import SelectField from "../SelectField/SelectField";
import { Button } from "../../../assets/Buttons.styles";
import { ButtonBack, ButtonContact } from "../../RoundedButton/RoundedButton";

const LoginPasswordReset = () => {
  return (
    <Wrapper>
    <PanelResetPassword>
      <Welcome>Reset hasła</Welcome>
      <SelectField
        type="text"
        placeholder="Wprowadź nazwę"
        value="name"
        label="Wpisz nazwę użytkownika:"
      />
      <SelectField
        type="text"
        placeholder="Wprowadź e-mail"
        value="name"
        label="Wpisz e-mail:"
      />
      <Button> Zmień Hasło </Button>
      <ButtonBack />
      <ButtonContact />
    </PanelResetPassword>
    </Wrapper>
  );
};

export default LoginPasswordReset;

