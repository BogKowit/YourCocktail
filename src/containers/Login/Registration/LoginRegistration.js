import React, {useState, useEffect, useReducer} from "react";
import { Welcome } from "../../../assets/Login.style";
import { PanelRegistration, Wrapper } from "../../../assets/template.styles";
import { SelectFieldRegistration } from "../../../components/SelectField/SelectField";
import { Button } from "../../../assets/Buttons.styles";
import {  ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";

const FormRegistration = {
  name: "",
  password: "",
  passwordCheck: "",
  email: "",
};

const LoginRegistration = () => {
const [error, setError] = useState("")
const [registerFomValue, setRegisterFomValue] = useState(FormRegistration);
const [checked, toggle] = useReducer(value => !value, false);

const handleFormValue = e =>{
  setRegisterFomValue({
    [e.target.name]: e.target.value})
}
const handleSubmit = (e) => {
  console.log({registerFomValue});
}

console.log(registerFomValue);

useEffect(() => {
 console.log(checked ? "Tak, zaznaczone" : "Nie, nie zaznaczone");
 localStorage.setItem("checkbox-value", checked);
});

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
            value={checked}
            onChange={toggle}
          />
        </div>

        <Button onClick={handleSubmit}> Zarejestruj </Button>
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

  //TODO:dodać usera
  //TODO:Zrobić botton
  //TODO:resetowanie
  //TODO:Ostylować input