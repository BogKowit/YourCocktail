import React from "react";
import {Info, Text, WrapperDiv, LinkTo, Button, Welcome } from "./LoginContact.style";


// export const textContent
const LoginContact = () => {
  return (
    <>
      <Welcome>Kontakt</Welcome>
      <Text>
        Witaj Pozagalaktyczny przybyszu, jeśli pragniesz się z nami skontaktować
        zaprasszamy osobiście do podanego punktu na mapie o adresie: DarkaArka
        43-100 Tychy
      </Text>
      <Info>mapa</Info>
      <Info>Telefon kontaktowy</Info>
      <Text>+123 456 678</Text>
      <Info>E-mail kontaktowy</Info>
      <Text>ZaprzysiężeniGalaktycznymPaktem@gmail.com</Text>
      <Info>tutaj będzie textArea</Info>
      <Button> Wyślij </Button>
    </>
  );
};

export default LoginContact;
