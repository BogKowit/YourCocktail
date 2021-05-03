import React, {useReducer, useState} from "react";
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { Text, Welcome } from "../../../assets/Login.style";
import { PanelContact, Wrapper } from "../../../assets/template.styles";
import { Button } from "../../../assets/Buttons.styles";
import { TiArrowBackOutline } from "react-icons/ti";
import { SelectFieldRegistration } from "../../../components/SelectField/SelectField";
import axios from "axios";
const messageForm = {
  phone: "",
  email: "",
  text: "",
};
const reducerTypes = {
  inputChange: "INPUT CHANGE",
  clearValue: "CLEAR VALUE",
  checkToggle: "CHECK TOGGLE",
  throwError: "THROW ERROR",
  addUser: "ADD USER",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "CLEAR VALUE":
      return messageForm;
    case "CHECK TOGGLE":
      return {
        ...state,
        checked: !state.checked,
      };
    case "THROW ERROR":
      return {
        ...state,
        error: action.errorValue,
      };
    case "ADD USER":
      return {};
    default:
      return state;
  }
};

const LoginContact = () => {
  const [newMessage, dispatch] = useReducer(reducer, messageForm)

  const handleFormValue = (e) => {
    dispatch({
      type: reducerTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1337/clientmsgs", {
        phone: newMessage.phone,
        email: newMessage.email,
        text: newMessage.text,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(newMessage);
  return (
    <Wrapper>
      <PanelContact>
        <Welcome>Kontakt</Welcome>
        <Text>
          Witaj Pozagalaktyczny przybyszu, jeśli pragniesz się z nami
          skontaktować zaprasszamy osobiście do podanego punktu na mapie o
          adresie: DarkaArka 43-100 Tychy
        </Text>
        <SelectFieldRegistration
          type="text"
          placeholder="Wprowadź numer telefonu"
          value={newMessage.phone}
          name="phone"
          label="Numer Telefonu:"
          onChange={handleFormValue}
        />
        <SelectFieldRegistration
          type="text"
          placeholder="Wprowadź e-mail"
          value={newMessage.email}
          name="email"
          label="E-mail"
          onChange={handleFormValue}
        />
        <SelectFieldRegistration
          name="text"
          type="textarea"
          placeholder="Twoja wiadomość"
          value={newMessage.text}
          label="twoja wiadomość"
          onChange={handleFormValue}
        />
        <Button onClick={handleSubmit}> Wyślij </Button>
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
