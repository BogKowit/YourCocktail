import React, {useState, useEffect, useContext} from 'react';
import { Welcome, Text } from "../../assets/Login.style";
import {PanelS, Wrapper} from '../../assets/template.styles';
import { UserContext } from '../../components/App';




const Home = () => {
  const date =JSON.parse(localStorage.getItem('user'))
  const {condition, group, name, status, surname, pack} = date

  return (
    <Wrapper>
      <PanelS>
        <Welcome>Witaj {name} {surname}</Welcome>
        <Text>Należysz do grupy: <br />{group}</Text>
        <Text>Twoja kondycja została oceniona na: {condition}</Text>
        <Text>Twój status to {status}</Text>
        <Text>Pakiet: {pack} </Text>


      </PanelS>
    </Wrapper>
  );
};

export default Home;
