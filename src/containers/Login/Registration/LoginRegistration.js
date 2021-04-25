import React, {useState} from "react";
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


// const validate = registerFomValue => {
//   if (!registerFomValue.email) {
//     return "e-mail jest wymagany";
//   } else if (
//     !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
//       registerFomValue.email)) {
//     return "Zły e-mail";
//   }

//   if (!registerFomValue.name) {
//         return "Imię jest wymagane";
//   } else if (form.name.length < 2) {
//     return "imię jezt za krótkie"
//   }

//   if (!registerFomValue.password) {
//     return "hasło jest wymagane"
//   } else if (registerFomValue.password.length < 5){
//     return "hasło jest za krótkie"
//   }

//   if (!registerFomValue.passwordCheck) {
//     return "Powtórzenie hasła jest wymagane";
//   } else if (registerFomValue.passwordCheck.length < 5){
//     return "Powtórzone hasło jest za krótkie"
//   }

//   if (registerFomValue.password !== registerFomValue.passwordCheck) {
//     return "Hasła się różnią"
//   }

//   //jeżeli nic nie znalazła to wszystko poszło SpoczkoOczko
//   return null
// }

const LoginRegistration = () => {
const [error, setError] = useState("")
const [registerFomValue, setRegisterFomValue] = useState(FormRegistration);
const handleFormValue = e =>{
    // [e.target.name]: e.target.value
}
const handleSubmit = (e) => {
}

// const handleAddUser = () = {
//   name: registerFomValue.name,
//   password: registerFomValue.password,
//   passwordRep: registerFomValue.passwordCheck,
//   email: registerFomValue.email,
// };
console.log(registerFomValue);


  return (
    <Wrapper>
      <PanelRegistration >
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