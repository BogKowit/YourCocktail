import React, { useContext, useState } from 'react';
import {WrapperDiv, LinkTo, Welcome,LinkWrapper } from "../../../assets/Login.style";
import SelectField from "../SelectField/SelectField";
import { login } from "../../../api/methods";
import { UserContext } from '../../App' ;
import {FiUserPlus} from "react-icons/fi"
import { BsChatDots, BsQuestionCircle } from "react-icons/bs";
import { ButtonLogin } from "../../../assets/Buttons.styles";


const LoginSelect = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(UserContext);

  const handleLogin = (event) =>{
    event.preventDefault();
    login(username, password).then((response) => setUser(response));
  }

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
      <ButtonLogin onClick={(e) => handleLogin(e)}>Zaloguj</ButtonLogin>
      <LinkWrapper>
        <FiUserPlus />
        <LinkTo to="/register"> Zarejestruj użytkownika.</LinkTo>
      </LinkWrapper>
      <WrapperDiv>
        <LinkWrapper>
          <BsQuestionCircle />
          <LinkTo to="/passwordReset">Zapomniałeś Hasła?</LinkTo>
        </LinkWrapper>
        <LinkWrapper>
          <BsChatDots />
          <LinkTo to="/contact">Skontaktuj się z nami!</LinkTo>
        </LinkWrapper>
      </WrapperDiv>
    </>
  );
}

export default LoginSelect;