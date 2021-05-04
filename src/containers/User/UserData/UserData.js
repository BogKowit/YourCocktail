import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Panel, Wrapper } from '../../../assets/template.styles'
import { TiArrowBackOutline } from 'react-icons/ti'
import { ButtonRounded } from '../../../components/RoundedButton/RoundedButton';
import { Welcome } from '../../../assets/Login.style';
import { SelectField } from "../../../components/SelectField/SelectField";
import styled from 'styled-components'
import { Button } from "../../../assets/Buttons.styles";

const SelectLabel = styled.p`
  margin: 0 0 5px;
  font-size: 14px;
`
const SelectMain = styled.select`
  margin: 10px;
`
const data = {
  firstname: "",
  lastname: "",
  value: "",
}
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

const UserData = () => {
  const [userData, setUserData] = useState();
  const [newDataState, dispatch] = useReducer(reducer, data);

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
        <SelectField
          type="text"
          placeholder="Wprowadz imię"
          value="firstname"
          label="Twoje imię"
          onChange={handleFormValue}
        />
        <SelectField
          type="text"
          placeholder="Wprowadź nazwisko"
          value="lastname"
          label="Twoje nazwisko"
          onChange={handleFormValue}
        />
        <SelectLabel>Twoja kondycja</SelectLabel>
        <SelectMain>
          <option value="1">1 Amator-kanapowy</option>
          <option value="2">2 Pieszy </option>
          <option value="3">3 Biegacz rekreacyjny </option>
          <option value="4">4 Biegacz amator </option>
          <option value="5">5 Biegacz zawodowiec</option>
        </SelectMain>

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

//FIXME: JEŚLI USER MA PRZYPIĘTE DANE IMIĘ I NAZISKO POJAWIA SIĘ W PANELU