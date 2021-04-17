import React from "react";
import {Info, Text,  LinkTo, Button, Welcome } from "../../../assets/Login.style";
import { Panel2, Wrapper } from "../LoginPanel.style";


// export const textContent
const LoginContact = () => {
  return (
    <Wrapper>
      <Panel2>
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
        <LinkTo to="login">Powrót do panelu Logowania</LinkTo>
      </Panel2>
    </Wrapper>
  );
};

export default LoginContact;
