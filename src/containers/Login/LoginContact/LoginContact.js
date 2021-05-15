import React, {useReducer} from "react";
import { ButtonClick, ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";
import { Field } from "../../../components/SelectField/SelectField";
import { ErrorMessage } from "../../../assets/adds.styles";
import { TopText } from "../../../components/Other/Other";
import axios from "axios";
import { emailRegex, phoneRegex } from "../../../utils/regex";
import { messageForm } from "../../../utils/forms";

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
  const [newMessage, dispatch] = useReducer(reducer, messageForm);

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
      .then((response) => {
        alert('The new message has been sent');
        dispatch({ type: reducerTypes.clearValue });
      })
      .catch((error) => {
        console.log(error);
        alert("your message was not sent successfully");
      });
  };

  const dispatchProps = (text) => {
    dispatch({
      type: reducerTypes.throwError,
      errorValue: `${text}`,
    });
  };

  const validate = () => {
    if (!newMessage.email) return dispatchProps("E-mail is required");
    if (!emailRegex.test(newMessage.email)) return dispatchProps("Bad email");
    if (!newMessage.name) return dispatchProps("Bad First name is required");
    if (newMessage.name.length < 3) return dispatchProps("The name is too short");
    if (!newMessage.phone) return dispatchProps("Telephone is required");
    if (!phoneRegex.test(newMessage.phone)) return dispatchProps('Wrong number')
    if (newMessage.text.length < 12) return dispatchProps('The message is too short')

    return newMessageSend()
}

  return (
    <>
        <TopText text="Contact Panel" />
        <h4>
          Hello, if you have any questions. Fill in the form.
        </h4>
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


