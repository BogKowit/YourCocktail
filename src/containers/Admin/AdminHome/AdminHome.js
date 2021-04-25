import React from 'react'
import { Welcome } from '../../../assets/Login.style';
import { Panel, Wrapper } from "../../../assets/template.styles";
import { ButtonRoundedFull } from '../../../components/RoundedButton/RoundedButton';
import { BiFileFind } from "react-icons/bi"
import { Button } from '../../../assets/Buttons.styles';
import { TiMessage } from 'react-icons/ti'

const AdminHome = () => {

  const handleLogout = (event) => {
    localStorage.removeItem("user");
    event.preventDefault();
    window.location.href = "/";
  };

  return (
    <Wrapper>
      <Panel>
        <Welcome>Panel administratora</Welcome>
        <ButtonRoundedFull
          icon={<BiFileFind />}
          text="Znajdź użytownika"
          link="/adminCheckUsers"
        />
        <ButtonRoundedFull
          icon={<TiMessage />}
          text="Zapytania"
          link="/adminMessage"
        />
        <Button onClick={(e) => handleLogout(e)}>Wyloguj</Button>
      </Panel>
    </Wrapper>
  );
}

export default AdminHome