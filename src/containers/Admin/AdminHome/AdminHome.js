import React from 'react'
import { Welcome } from '../../../assets/Login.style';
import { ButtonRoundedFull } from '../../../components/RoundedButton/RoundedButton';
import { Button } from '../../../assets/Buttons.styles';
import { TiMessage } from 'react-icons/ti'
import { RiExchangeDollarFill } from 'react-icons/ri'
import { useHistory } from "react-router-dom";

const AdminHome = () => {
  let history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
    <>
      <Welcome>Administration panel</Welcome>
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
    </>
  );
}

export default AdminHome