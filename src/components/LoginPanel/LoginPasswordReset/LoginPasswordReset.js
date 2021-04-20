import React from "react";
import { Welcome } from "../../../assets/Login.style";
import { PanelResetPassword, Wrapper } from "../../../assets/template.styles";
import { SelectField } from "../SelectField/SelectField";
import { Button } from "../../../assets/Buttons.styles";
import { BsChatDots } from "react-icons/bs";
import { TiArrowBackOutline } from "react-icons/ti";
import { ButtonRounded } from "../../RoundedButton/RoundedButton";


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
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Logowania"
          link="/login"
        />
        <ButtonRounded
          icon={<BsChatDots />}
          text="Skontaktuj się z nami"
          link="/contact"
        />
      </PanelResetPassword>
    </Wrapper>
  );
};

export default LoginPasswordReset;

