import React, {useState, useEffect, useReducer} from "react";
import { Welcome } from "../../../assets/Login.style";
import { PanelRegistration, Wrapper } from "../../../assets/template.styles";
import { SelectFieldRegistration } from "../../../components/SelectField/SelectField";
import { Button } from "../../../assets/Buttons.styles";
import {  ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";
import axios from "axios"
import { ErrorMessage } from "../../../assets/adds.styles";

const FormRegistration = {
  name: "",
  password: "",
  passwordCheck: "",
  email: "",
  checked: false,
  error: "",
};

const reducerTypes = {
  inputChange: "INPUT CHANGE",
  clearValue: "CLEAR VALUE",
  checkToggle: "CHECK TOGGLE",
  throwError: "THROW ERROR",
};
const reducer = (state,action) =>{
  switch (action.type) {
    case "INPUT CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "CLEAR VALUE":
      return FormRegistration;
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
    default:
      return state;
  }
};

const LoginRegistration = () => {
  const [registerFomValue, dispatch] = useReducer(
    reducer,
    FormRegistration
    );
console.log(registerFomValue);

const handleFormValue = (e) => {
  dispatch({
    type: reducerTypes.inputChange,
    field: e.target.name,
    value: e.target.value,
  });
};

const newUser = async () =>{
    await axios.post("http://localhost:1337/dupas", {
    name: registerFomValue.name,
    password: registerFomValue.password,
    email: registerFomValue.email,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


const handleSubmit = async (e) => {
  e.preventDefault()
  validate();
  }

const validate = () => {
  if (!registerFomValue.email) {
    dispatch({
      type: reducerTypes.throwError,
      errorValue: "e-mail jest wymagany",
    });
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
      registerFomValue.email
    )
  ) {
    dispatch({
      type: reducerTypes.throwError,
      errorValue: "Zły e-mail",
    });
  }
  else if (!registerFomValue.name) {
    dispatch({
      type: reducerTypes.throwError,
      errorValue: "Imię jest wymagane",
    });
  } else if (registerFomValue.name.length < 3) {
    dispatch({
      type: reducerTypes.throwError,
      errorValue: "imię jezt za krótkie",
    });
  }
  else if (!registerFomValue.password) {
    dispatch({
      type: reducerTypes.throwError,
      errorValue: "hasło jest wymagane",
    });
  } else if (registerFomValue.password.length < 5) {
    dispatch({
      type: reducerTypes.throwError,
      errorValue: "hasło jest za krótkie",
    });
  }
  else if (!registerFomValue.passwordCheck) {
    dispatch({
      type: reducerTypes.throwError,
      errorValue: "Powtórzenie hasła jest wymagane",
    });
  } else if (registerFomValue.passwordCheck.length < 5) {
    dispatch({
      type: reducerTypes.throwError,
      errorValue: "Powtórzone hasło jest za krótkie",
    });
  }
  else if (registerFomValue.password !== registerFomValue.passwordCheck) {
    dispatch({
      type: reducerTypes.throwError,
      errorValue: "Hasła się różnią",
    });
  }
  else if (!registerFomValue.checked) {
    dispatch({
      type: reducerTypes.throwError,
      errorValue: "ZAAKCEPTUJ REGULAMIN",
    });
  }
  else return (
    newUser(),
    dispatch(
      { type: reducerTypes.clearValue, },
      { type: reducerTypes.checkToggle },
    )
  );
};

  return (
    <Wrapper>
      <PanelRegistration>
        <Welcome>Panel Rejestracyjny</Welcome>
        <SelectFieldRegistration
          type="text"
          placeholder="Wprowadź nazwę"
          name="name"
          value={registerFomValue.name}
          label="Nazwa:"
          onChange={handleFormValue}
        />
        <SelectFieldRegistration
          type="password"
          placeholder="Wprowadź hasło"
          name="password"
          value={registerFomValue.password}
          label="Hasło:"
          onChange={handleFormValue}
        />
        <SelectFieldRegistration
          type="password"
          placeholder="Wprowadź ponownie hasło"
          name="passwordCheck"
          value={registerFomValue.passwordCheck}
          label="Ponownie hasło:"
          onChange={handleFormValue}
        />
        <SelectFieldRegistration
          type="email"
          placeholder="Wprowadź e-mail"
          name="email"
          value={registerFomValue.email}
          label="E-mail kontaktowy:"
          onChange={handleFormValue}
        />
        <div>
          <label>Akceptuję regulamin rejestracji</label>
          <input
            type="checkbox"
            value={registerFomValue.check}
            onChange={() => dispatch({ type: reducerTypes.checkToggle })}
          />
        </div>

        <Button onClick={handleSubmit}>Zarejestruj</Button>
        {registerFomValue.error ? (
          <ErrorMessage>{registerFomValue.error}</ErrorMessage>
        ) : null}
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Logowania"
          link="/login"
        />
      </PanelRegistration>
    </Wrapper>
  );
};

export default LoginRegistration;


//FIXME:NAprawić akceptacje regulamina(reset)
//TODO: Email-validacja,nazwa użytkownika z obecnymi
//TODO: Wyświetlanie się więcej niż jednego błedu poprzez validacji
//TODO: ADD USER przekierowanie na zalogowanego użytkownika
//TODO: Rozdzielić funckje on click od formularza