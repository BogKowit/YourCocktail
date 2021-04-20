import React from 'react';
import { Welcome } from "../../assets/Login.style";
import {Panel, Wrapper} from '../../assets/template.styles';
import { Button } from "../../assets/Buttons.styles"


const Home = () => {

    const handleLogout = (event) =>{
      localStorage.removeItem('user');
      event.preventDefault()
      window.location.href = "/";
  }


  return (
    <Wrapper>
      <Panel>
        <Welcome>Witaj  </Welcome>
        {/* <Text>Należysz do grupy: <br />{group}</Text> */}
        {/* <Text>Twoja kondycja została oceniona na: {condition}</Text> */}
        {/* <Text>Twój status to {status}</Text> */}
        {/* <Text>Pakiet: {pack} </Text> */}
        <Button onClick={(e) => handleLogout(e)}>Wyloguj</Button>
      </Panel>
    </Wrapper>
  );
};

export default Home;
