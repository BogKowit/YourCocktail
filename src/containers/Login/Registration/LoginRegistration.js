import React, {useReducer} from "react";
import { Field, FieldToggle } from "../../../components/SelectField/SelectField";
import {  ButtonClick, ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { TopText } from "../../../components/Other/Other";
import { ErrorMessage } from "../../../assets/adds.styles";
import { TiArrowBackOutline } from "react-icons/ti";
import { useHistory } from "react-router-dom";
import axios from "axios"
import { formRegistration } from "../../../utils/forms";

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
      return formRegistration;
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
  formRegistration
    );
    let history = useHistory();


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
    status: 'user'
  })
}

const dispatchPropsError = (text) =>{
  dispatch({
    type: reducerTypes.throwError,
    errorValue: `${text}`
  });
}

const handleSubmit = (e) => {
  e.preventDefault()
  validate();
  }

const validate = () => {
  if (!registerFomValue.email) {
    dispatchPropsError("e-mail is required");
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
      registerFomValue.email)
  ) {
    dispatchPropsError("Bad e-mail");
  }
  else if (!registerFomValue.name) {
    dispatchPropsError("Name is required");
  } else if (registerFomValue.name.length < 3) {
    dispatchPropsError("Name is too short");
  }
  else if (!registerFomValue.password) {
    dispatchPropsError("password is required");
  } else if (registerFomValue.password.length < 5) {
    dispatchPropsError("password is too short");
  }
  else if (!registerFomValue.passwordCheck) {
    dispatchPropsError("Repeat password is required");
  } else if (registerFomValue.passwordCheck.length < 5) {
    dispatchPropsError("Repeat password is too short");
  }
  else if (registerFomValue.password !== registerFomValue.passwordCheck) {
    dispatchPropsError("Passwords vary");
  }
  else if (!registerFomValue.checked) {
    dispatchPropsError("accept the Statement");
  }
  else return (
    newUser(),
    dispatch({ type: reducerTypes.clearValue }),
    alert("User registered"),
    history.push("/")
  );
};

  return (
    <>
      <TopText text="Registration Panel" />
      <Field
        type="text"
        placeholder="Enter a name"
        name="name"
        value={registerFomValue.name}
        label="Name:"
        onChange={handleFormValue}
      />
      <Field
        type="password"
        placeholder="Enter your password"
        name="password"
        value={registerFomValue.password}
        label="Password:"
        onChange={handleFormValue}
      />
      <Field
        type="password"
        placeholder="Re-enter the password"
        name="passwordCheck"
        value={registerFomValue.passwordCheck}
        label="Password again:"
        onChange={handleFormValue}
      />
      <Field
        type="email"
        placeholder="Enter e-mail"
        name="email"
        value={registerFomValue.email}
        label="E-mail:"
        onChange={handleFormValue}
      />
      <FieldToggle
        text="I declare that `I am over 18 years old`"
        type="checkbox"
        value={registerFomValue.check}
        onChange={() => dispatch({ type: reducerTypes.checkToggle })}
      />
      <ButtonClick text="Register" onClick={handleSubmit} />
      {registerFomValue.error ? (
        <ErrorMessage>{registerFomValue.error}</ErrorMessage>
      ) : null}
      <ButtonRounded
        icon={<TiArrowBackOutline />}
        text="Powrót do panelu Logowania"
        link="/login"
      />
    </>
  );
};

export default LoginRegistration;


//FIXME:NAprawić akceptacje regulamina(reset)
//TODO: Wyświetlanie się więcej niż jednego błedu poprzez validacji
