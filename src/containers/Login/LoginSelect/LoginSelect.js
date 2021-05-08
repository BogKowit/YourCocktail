import React, { useState, useEffect, useReducer, } from "react";
import { useHistory } from "react-router-dom";
import {WrapperDiv, Welcome } from "../../../assets/Login.style";
import { SelectField } from "../../../components/SelectField/SelectField";
import { ButtonRounded } from '../../../components/RoundedButton/RoundedButton';
import { Button } from "../../../assets/Buttons.styles";
import { Wrapper, Panel } from "../../../assets/template.styles";
import { BsChatDots, BsQuestionCircle } from "react-icons/bs";
import { ErrorMessage } from "../../../assets/adds.styles";
import { FiUserPlus } from "react-icons/fi";
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
          ? (localStorage.setItem("data", user.status),
              history.push("/adminHome"))
          : (localStorage.setItem("data", user.status),
              history.push("/board"))
      );
    }
    else setError('coś poszło nie tak')
  }

  return (
    <Wrapper>
      <Panel>
        <Welcome> Witaj Użytkowniku</Welcome>
        <SelectField
          type="text"
          placeholder="Wprowadź nazwę"
          value="name"
          label="Nazwa:"
          onChange={(e) => setUsername(e.target.value)}
        />
        <SelectField
          type="password"
          placeholder="Wprowadź hasło"
          value="password"
          label="Hasło:"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={(e) => LoginVerification(e)}>Zaloguj</Button>
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <ButtonRounded
          icon={<FiUserPlus />}
          text="Zarejestruj użytkownika."
          link="/register"
        />
        <WrapperDiv>
          <ButtonRounded
            icon={<BsQuestionCircle />}
            text="Zapomniałeś Hasła"
            link="/passwordReset"
          />
          <ButtonRounded
            icon={<BsChatDots />}
            text="Skontaktuj się z nami!"
            link="/contact"
          />
        </WrapperDiv>
      </Panel>
    </Wrapper>
  );
}

export default LoginSelect;