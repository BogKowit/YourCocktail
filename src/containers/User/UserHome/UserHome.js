import React from 'react';
import { Welcome } from "../../../assets/Login.style";
import {Panel, Wrapper} from '../../../assets/template.styles';
import { Button } from "../../../assets/Buttons.styles"
import { ButtonRounded, ButtonRoundedFull } from "../../../components/RoundedButton/RoundedButton";
import { GrMap } from "react-icons/gr"
import { BiUserCircle } from "react-icons/bi"
import { RiSurveyLine, RiTeamFill } from "react-icons/ri";
import { MdAddAPhoto} from "react-icons/md"



const Home = () => {

    const handleLogout = (event) =>{
      localStorage.removeItem('user');
      event.preventDefault()
      window.location.href = "/";
  }

  //TODO: Witaj zmienić na login użytkownika

  return (
    <Wrapper>
      <Panel>
        <Welcome>Witaj użytkowniku</Welcome>

        <ButtonRoundedFull icon={<GrMap />} text="Topic 1" link="/userMap" />
        <ButtonRoundedFull
          icon={<BiUserCircle />}
          text="Topic 1"
          link="/userData"
        />
        <ButtonRoundedFull
          icon={<RiSurveyLine />}
          text="Topic 1"
          link="/userQuiz"
        />
        <ButtonRoundedFull
          icon={<RiTeamFill />}
          text="Twoja Topic 1"
          link="/userData"
        />
        <ButtonRoundedFull
          icon={<MdAddAPhoto />}
          text="Dodaj Topic 1"
          link="/useraddphoto"
        />
        <Button onClick={(e) => handleLogout(e)}>Wyloguj</Button>
      </Panel>
    </Wrapper>
  );
};

export default Home;
