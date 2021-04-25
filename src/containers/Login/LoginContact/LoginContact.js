import React from "react";
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { Info, Text, Welcome } from "../../../assets/Login.style";
import { PanelContact, Wrapper } from "../../../assets/template.styles";
import { Button } from "../../../assets/Buttons.styles";
import { TiArrowBackOutline } from "react-icons/ti";

// export const textContent
const LoginContact = () => {
  return (
    <Wrapper>
      <PanelContact>
        <Welcome>Kontakt</Welcome>
        <Text>
          Witaj Pozagalaktyczny przybyszu, jeśli pragniesz się z nami
          skontaktować zaprasszamy osobiście do podanego punktu na mapie o
          adresie: DarkaArka 43-100 Tychy
        </Text>
        <Info>mapa</Info>
        <Info>Telefon kontaktowy</Info>
        <Text>+123 456 678</Text>
        <Info>E-mail kontaktowy</Info>
        <Text>ZaprzysiężeniGalaktycznymPaktem@gmail.com</Text>
        <Button> Wyślij </Button>
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Logowania"
          link="/login"
        />
      </PanelContact>
    </Wrapper>
  );
};

export default LoginContact;
