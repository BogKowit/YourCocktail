import React from "react";
import { WrapperDiv, LinkTo, Button, Welcome } from "./LoginContact.style";

// export const textContent
const LoginContact = () => {
  return (
    <>
      <Welcome>Kontakt</Welcome>
      <p>
        Witaj Pozagalaktyczny przybyszu, jeśli pragniesz się z nami skontaktować
        zaprasszamy osobiście do podanego punktu na mapie o adresie: DarkaArka
        43-100 Tychy
      </p>
      <p>mapa</p>
      <p>Telefon kontaktowy</p>
      <p>+123 456 678</p>
      <p>E-mail kontaktowy</p>
      <p>ZaprzysiężeniGalaktycznymPaktem@gmail.com</p>
      <p>tutaj będzie textArea</p>
      <Button> Wyślij </Button>
    </>
  );
};

export default LoginContact;
