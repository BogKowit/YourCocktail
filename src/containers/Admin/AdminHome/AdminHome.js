import React from 'react'
import { Welcome } from '../../../assets/Login.style';
import { Panel, Wrapper } from "../../../assets/template.styles";
import { ButtonRoundedFull } from '../../../components/RoundedButton/RoundedButton';
import { Button } from '../../../assets/Buttons.styles';
import { BiFileFind } from "react-icons/bi"
import { TiMessage } from 'react-icons/ti'
import { RiExchangeDollarFill } from 'react-icons/ri'

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
        <ButtonRoundedFull
          icon={<RiExchangeDollarFill />}
          text="Zmiana statusu użykownika"
          link="/adminChangeUserStatus"
        />
        <Button onClick={(e) => handleLogout(e)}>Wyloguj</Button>
      </Panel>
    </Wrapper>
  );
}

export default AdminHome