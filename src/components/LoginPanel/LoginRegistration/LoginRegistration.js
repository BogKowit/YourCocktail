import React, {useState} from "react";
import { Welcome } from "../../../assets/Login.style";
import { PanelRegistration, Wrapper } from "../../../assets/template.styles";
import { SelectFieldRegistration } from "../SelectField/SelectField";
import { Button } from "../../../assets/Buttons.styles";
import {  ButtonRounded } from "../../RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";

const FormRegistration = {
  name: "",
  password: "",
  passwordCheck: "",
  email: "",
};

const LoginRegistration = () => {
// const [error, setError] = useState(null)
const [registerFomValue, setRegisterFomValue] = useState(FormRegistration);
const handleFormValue = e =>{
  e.preventDefault();
  setRegisterFomValue({
    ...registerFomValue,
    [e.target.name]: e.target.value
  })
}
const handleAddUser = {
  name: registerFomValue.name,
  password: registerFomValue.password,
  passwordRep: registerFomValue.passwordCheck,
  email: registerFomValue.email,
};


  //TODO:dodać usera
  //TODO:Zrobić botton
  //TODO:resetowanie
  return (
    <Wrapper>
      <PanelRegistration as="form">
        <Welcome>Panel Rejestracyjny</Welcome>
        <SelectFieldRegistration
          type="text"
          placeholder="Wprowadź nazwę"
          name="name"
          value={registerFomValue.name}
          label="Nazwa:"
          onChange={handleFormValue}
          // onChange={e => setForm({...form,})}
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
        <Button onClick={(e) => e.preventDefault()}> Zarejestruj </Button>
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
