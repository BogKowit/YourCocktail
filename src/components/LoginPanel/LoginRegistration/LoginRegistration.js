import React, {useState} from "react";
import {LinkTo, Button, Welcome } from "../../../assets/Login.style";
import { PanelM, Wrapper } from "../../../assets/template.styles";
import SelectField from "../SelectField/SelectField";

// const FormRegistration = {
  // nick:'',
  // password:'',
  // passwordRep:'',
  // email:''
// }

const LoginRegistration = () => {
// const [error, setError] = useState(null)
// const [form, setForm] = useState({ FormRegistration });

// const handleSubmit = e =>{
//   e.preventDefault()
//   console.log(form);
// }

// const updateField = event =>{
//   setForm({
//     ...form,
//     [event.target.name]: e.target.value
//   })
// }

  return (
    <Wrapper>
      <PanelM>
        <Welcome>Panel Rejestracyjny</Welcome>
        <SelectField
          type="text"
          placeholder="Wprowadź nazwę"
          value="nick"
          label="Nazwa:"
        />
        <SelectField
          type="password"
          placeholder="Wprowadź hasło"
          value="password"
          label="Hasło:"
        />
        <SelectField
          type="password"
          placeholder="Wprowadź ponownie hasło"
          value="password"
          label="Ponownie hasło:"
        />
        <SelectField
          type="email"
          placeholder="Wprowadź e-mail"
          value="email"
          label="E-mail kontaktowy:"
        />
        <Button> Zarejestruj </Button>
        <LinkTo to="login">Powrót do panelu Logowania</LinkTo>
      </PanelM>
    </Wrapper>
  );
};

export default LoginRegistration;
