import React from "react";
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { Info, Text, Welcome } from "../../../assets/Login.style";
import { PanelContact, Wrapper } from "../../../assets/template.styles";
import { Button } from "../../../assets/Buttons.styles";
import { TiArrowBackOutline } from "react-icons/ti";
import { SelectField } from "../../../components/SelectField/SelectField";

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
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1472.6847352774662!2d18.983270965000692!3d50.10738360386395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8dc879737c7e3cbe!2sMunicipal%20Sports%20and%20Recreation%20Tychy!5e1!3m2!1sen!2spl!4v1619542429126!5m2!1sen!2spl"
          width="600"
          height="450"
          style="border:0;"
          loading="lazy"
        /> */}
        <SelectField
          type="text"
          placeholder="Wprowadź numer telefonu"
          value="phone"
          label="Numer Telefonu:"
          // onChange=""
        />
        <SelectField
          type="text"
          placeholder="Wprowadź e-mail"
          value="email"
          label="E-mail"
          // onChange=""
        />
        <SelectField
          type="textarea"
          placeholder="Twoja wiadomość"
          value="msg"
          label="twoja wiadomość"
          // onChange=""
        />
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
