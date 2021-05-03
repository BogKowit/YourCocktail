import React, { useState, useEffect, useReducer } from "react";
import {WrapperDiv, Welcome } from "../../../assets/Login.style";
import { SelectField } from "../../../components/SelectField/SelectField";
import { ButtonRounded } from '../../../components/RoundedButton/RoundedButton';
import { Button } from "../../../assets/Buttons.styles";
import { BsChatDots, BsQuestionCircle } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { Wrapper, PanelLogin } from "../../../assets/template.styles";
import axios from 'axios'


const LoginSelect = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dataUser, setDataUser] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:1337/dupas")
      .then((response) => {
        // console.log(response);
        const data = response.data;
        setDataUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dupa = () => {
    const userFound = dataUser.filter(
      (user) =>
      user.name === username &&
      user.password === password
    );
    if (userFound.length > 0) {
      console.log("udało się");
    } else setError('No DUPA, spróbój ponownie')}

  return (
    <Wrapper>
      <PanelLogin>
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
        {/* //////////////////////////////////////////////////////////// */}
        <Button onClick={(e) => dupa(e)}>Zaloguj</Button>
        {error}
        {/* //////////////////////////////////////////////////////////// */}
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
      </PanelLogin>
    </Wrapper>
  );
}

export default LoginSelect;

//TODO:DODAĆ Add user => localStorage;
//TODO:DODAĆ Add panel change to login;