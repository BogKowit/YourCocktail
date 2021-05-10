import React, {useReducer} from "react";
import { ButtonClick, ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { LoginContactText, Welcome } from "../../../assets/Login.style";
import { TiArrowBackOutline } from "react-icons/ti";
import { Field } from "../../../components/SelectField/SelectField";
import { ErrorMessage } from "../../../assets/adds.styles";
import { TopText } from "../../../components/Other/Other";
import axios from "axios";

const messageForm = {
  name: "",
  phone: "",
  email: "",
  text: "",
};
const reducerTypes = {
  inputChange: "INPUT CHANGE",
  clearValue: "CLEAR VALUE",
  throwError: "THROW ERROR",
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
    case "THROW ERROR":
      return {
        ...state,
        error: action.errorValue,
      };
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
        text: newMessage.text,
        phone: newMessage.phone,
        email: newMessage.email,
        name: newMessage.name,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const dispatchProps = (text) => {
    dispatch({
      type: reducerTypes.throwError,
      errorValue: `${text}`,
    });
  };
  
  const validate = () => {
    if (!newMessage.email) {
      dispatchProps("E-mail is required");
    // } else if (
    //   !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
    //     newMessage.email
    //   )
    // ) {
      dispatchProps("Bad email");
    } else if (!newMessage.name) {
      dispatchProps("Bad First name is required");
    } else if (newMessage.name.length < 3) {
      dispatchProps("The name is too short");
    } else if (!newMessage.phone){
      dispatchProps("Telephone is required");
      } else if (/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/(newMessage.phone)) {
        dispatchProps("wrong phone number");
      } else {
        return newMessageSend(), console.log("ok");
        // dispatch({ type: reducerTypes.clearValue }),
        // alert('Nowa wiadomość została wysłana');
      };
}
  console.log(newMessage);
  return (
    <>
        <TopText text="Registration Panel" />
        <LoginContactText>
          Hello, if you have any questions. Fill in the form
        </LoginContactText>
        <Field
          type="text"
          placeholder="Please enter your name"
          value={newMessage.name}
          name="name"
          label="Name:"
          onChange={handleFormValue}
        />
        <Field
          type="text"
          placeholder="Please enter your phone number"
          value={newMessage.phone}
          name="phone"
          label="Phone number:"
          onChange={handleFormValue}
        />
        <Field
          type="text"
          placeholder="Please enter your e-mail"
          value={newMessage.email}
          name="email"
          label="E-mail:"
          onChange={handleFormValue}
        />
        <Field
          name="text"
          type="textarea"
          placeholder="Your message"
          value={newMessage.text}
          label="Your message:"
          onChange={handleFormValue}
        />
        <ButtonClick onClick={handleSubmit} text="Send" />
        {newMessage.error ? (
          <ErrorMessage>{newMessage.error}</ErrorMessage>
        ) : null}
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Back to login panel"
          link="/login"
        />
    </>
  );
};

export default LoginContact;

//FIXME:PHONE WALIDACJA

//TODO: DODAĆ WIADOMOŚĆ ZOSTAŁA WYSŁANA
//TODO: Zwiększyć height formularza