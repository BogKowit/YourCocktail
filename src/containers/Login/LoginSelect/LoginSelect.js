import React, { useContext, useState, useEffect } from "react";
import {WrapperDiv, Welcome } from "../../../assets/Login.style";
import { SelectField } from "../../../components/SelectField/SelectField";
import { login } from "../../../api/methods";
import { ButtonRounded } from '../../../components/RoundedButton/RoundedButton';
import { Button } from "../../../assets/Buttons.styles";
import { BsChatDots, BsQuestionCircle } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { Wrapper, PanelLogin } from "../../../assets/template.styles";
import { Redirect } from "react-router";
// import BackGroundColor from "../../../components/BackGroundColor/BackGroundColor"

const LoginSelect = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [userData, setUserData] = useState(loadJSON(`user:${login}`));

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
        <Button onClick={(e) => handleLogin(e)}>Zaloguj</Button>
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