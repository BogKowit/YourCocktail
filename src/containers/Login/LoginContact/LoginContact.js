import React, {useReducer, useState} from "react";
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { Text, Welcome } from "../../../assets/Login.style";
import { PanelContact, Wrapper } from "../../../assets/template.styles";
import { Button } from "../../../assets/Buttons.styles";
import { TiArrowBackOutline } from "react-icons/ti";
import { SelectFieldRegistration } from "../../../components/SelectField/SelectField";
import { ErrorMessage } from "../../../assets/adds.styles";
import axios from "axios";

export const messageForm = {
  name: "",
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
    validate()
  };
  
  const newMessageSend = async () => {
    await axios
      .post("http://localhost:1337/clientmsgs", {
        name: newMessage.name,
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

  const validate = () => {
    if (!newMessage.email) {
      dispatch({
        type: reducerTypes.throwError,
        errorValue: "e-mail jest wymagany",
      });
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
        newMessage.email
      )
    ) {
      dispatch({
        type: reducerTypes.throwError,
        errorValue: "Zły e-mail",
      });
    } else if (!newMessage.name) {
      dispatch({
        type: reducerTypes.throwError,
        errorValue: "Imię jest wymagane",
      });
    } else if (newMessage.name.length < 3) {
      dispatch({
        type: reducerTypes.throwError,
        errorValue: "imię jezt za krótkie",
      });
    } else if (!newMessage.phone){
      dispatch({
        type: reducerTypes.throwError,
        errorValue: "Telefon jest wymagany",
      });
    // } else if (
    //   /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(newMessage.phone)
    // ) {
    //   dispatch({
    //     type: reducerTypes.throwError,
    //     errorValue: "zły numer telefonu",
    //   });
    } else {
      return newMessageSend(), dispatch({ type: reducerTypes.clearValue }), alert('Nowa wiadomość została wysłana');
    };
}
  console.log(newMessage);
  return (
    <Wrapper>
      <PanelContact>
        <Welcome>Kontakt</Welcome>
        <Text>
          Witaj Pozagalaktyczny przybyszu, jeśli pragniesz się z nami
          skontaktować zaprasszamy osobiście do wypełnienia ankiety
        </Text>
        <SelectFieldRegistration
          type="text"
          placeholder="Wprowadź swoje imię"
          value={newMessage.name}
          name="name"
          label="Imię:"
          onChange={handleFormValue}
        />
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
        {newMessage.error ? <ErrorMessage>{newMessage.error}</ErrorMessage> : null}
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

//FIXME:PHONE WALIDACJA
//TODO: Rozdzielić funckje on click od formularza