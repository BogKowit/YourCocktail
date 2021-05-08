import React, {useReducer } from "react";
import axios from "axios";
import { Panel, Wrapper } from '../../../assets/template.styles'
import { TiArrowBackOutline } from 'react-icons/ti'
import { ButtonRounded } from '../../../components/RoundedButton/RoundedButton';
import { Welcome } from '../../../assets/Login.style';
import { SelectField, SelectFieldRegistration } from "../../../components/SelectField/SelectField";
import styled from 'styled-components'
import { Button } from "../../../assets/Buttons.styles";

const dataUser = {
  firstname: "",
  lastname: "",

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
      return dataUser;
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

const UserData = () => {
  const [newDataState, dispatch] = useReducer(
    reducer,
    dataUser
    );


  console.log(newDataState);

  const handleFormValue = (e) => {
    dispatch({
      type: reducerTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const newDataUser = async () => {
    await axios
      .post("http://localhost:1337/user-statuses", {
        firstname: newDataState.firstname,
        lastname: newDataState.lastname,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    newDataUser()
  };


  return (
    <Wrapper>
      <Panel>
        <Welcome>Witaj w Panelu użytkownika</Welcome>
        <SelectFieldRegistration
          type="text"
          placeholder="Wprowadz imię"
          name="firstname"
          value={newDataState.firstname}
          label="Twoje imię"
          onChange={handleFormValue}
        />
        <SelectFieldRegistration
          type="text"
          placeholder="Wprowadź nazwisko"
          name="lastname"
          value={newDataState.lastname}
          label="Twoje nazwisko"
          onChange={handleFormValue}
        />

        <Button onClick={handleSubmit}> Wyślij </Button>

        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Użytkownika"
          link="/userHome"
        />
      </Panel>
    </Wrapper>
  );
}

export default UserData

