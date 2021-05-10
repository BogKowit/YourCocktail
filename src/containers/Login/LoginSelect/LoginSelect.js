import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { WrapperLoginPanel } from "../../../assets/Login.style";
import { SelectField } from "../../../components/SelectField/SelectField";
import { ButtonClick, ButtonRounded } from '../../../components/RoundedButton/RoundedButton';
import { BsChatDots, BsQuestionCircle } from "react-icons/bs";
import { ErrorMessage } from "../../../assets/adds.styles";
import { FiUserPlus } from "react-icons/fi";
import { TopText } from "../../../components/Other/Other";
import axios from 'axios'

const LoginSelect = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dataUser, setDataUser] = useState("");
  const [error, setError] = useState("");
  let history = useHistory ();

  useEffect(() => {
    axios
      .get("http://localhost:1337/dupas")
      .then((response) => {
        setDataUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const LoginVerification = (e) => {
    e.preventDefault()
    const userFound = dataUser.filter(
      (user) => user.name === username && user.password === password
    );
    if (userFound.length > 0) {
      userFound.map((user) =>
        user.status === "admin"
          ? (localStorage.setItem("data", user.id), history.push("/adminHome"))
          : (localStorage.setItem("data", user.id), history.push("/userHome"))
      );
    }
    else setError('coś poszło nie tak')
  }

  return (
    <>
      <TopText text="Hello User" />
      <SelectField
        type="text"
        placeholder="Enter a name"
        value="name"
        label="Name:"
        onChange={(e) => setUsername(e.target.value)}
      />
      <SelectField
        type="password"
        placeholder="Enter your password"
        value="password"
        label="Password:"
        onChange={(e) => setPassword(e.target.value)}
      />
      <ButtonClick text="Login" onClick={LoginVerification} />
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      <ButtonRounded
        icon={<FiUserPlus />}
        text="Register the user."
        link="/register"
      />
      <WrapperLoginPanel>
        <ButtonRounded
          icon={<BsQuestionCircle />}
          text="Remind password"
          link="/passwordReset"
        />
        <ButtonRounded
          icon={<BsChatDots />}
          text="Contact with us!"
          link="/contact"
        />
      </WrapperLoginPanel>
    </>
  );
}

export default LoginSelect;