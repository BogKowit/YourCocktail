import React, { useContext, useState } from 'react';
import {WrapperDiv, Welcome } from "../../../assets/Login.style";
import { SelectField } from "../SelectField/SelectField";
import { login } from "../../../api/methods";
import { UserContext } from '../../App' ;
import { ButtonRounded } from '../../RoundedButton/RoundedButton';
import { Button } from "../../../assets/Buttons.styles";
import { BsChatDots, BsQuestionCircle } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";


const LoginSelect = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleLogin = (event) => {
    event.preventDefault();
    login(username, password).then((response) => setUser(response));
  };

  return (
    <>
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
      <Button onClick={(e) => handleLogin(e)}>Zaloguj</Button>
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
    </>
  );
}

export default LoginSelect;