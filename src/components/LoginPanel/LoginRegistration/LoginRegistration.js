import React from "react";
import { Welcome } from "../../../assets/Login.style";
import { PanelRegistration, Wrapper } from "../../../assets/template.styles";
import SelectField from "../SelectField/SelectField";
import { Button } from "../../../assets/Buttons.styles";
import {  ButtonRounded } from "../../RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";

const FormRegistration = {
  name:'',
  password:'',
  passwordRep:'',
  email:''
}

const LoginRegistration = ({formValue}) => {
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
      <PanelRegistration>
        <Welcome>Panel Rejestracyjny</Welcome>
        <SelectField
          type="text"
          placeholder="Wprowadź nazwę"
          // value={formValue.name}
          label="Nazwa:"
        />
        <SelectField
          type="password"
          placeholder="Wprowadź hasło"
          // value={formValue.password}
          label="Hasło:"
        />
        <SelectField
          type="password"
          placeholder="Wprowadź ponownie hasło"
          // value={formValue.passwordCheck}
          label="Ponownie hasło:"
        />
        <SelectField
          type="email"
          placeholder="Wprowadź e-mail"
          // value={formValue.email}
          label="E-mail kontaktowy:"
        />
        <Button> Zarejestruj </Button>
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
