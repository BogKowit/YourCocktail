import React, { useState, useEffect } from "react";
import axios from "axios";
import { Panel, Wrapper } from '../../../assets/template.styles'
import { TiArrowBackOutline } from 'react-icons/ti'
import { ButtonRounded } from '../../../components/RoundedButton/RoundedButton';
import { Welcome } from '../../../assets/Login.style';

const UserData = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/dupas")
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Wrapper>
      <Panel>
        <Welcome>Witaj w Panelu użytkownika</Welcome>
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Użytkownika"
          link="/userHome"
        />
      </Panel>
    </Wrapper>
  );
}

export default UserData
