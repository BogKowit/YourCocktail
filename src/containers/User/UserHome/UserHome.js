import React from 'react';
import { Welcome } from "../../../assets/Login.style";
import {Panel, Wrapper} from '../../../assets/template.styles';
import { Button } from "../../../assets/Buttons.styles"
import { ButtonRoundedFull } from "../../../components/RoundedButton/RoundedButton";
import { RiSurveyLine, RiTeamFill } from "react-icons/ri";
import { MdAddAPhoto} from "react-icons/md"
import { useHistory } from "react-router-dom";

const Home = () => {
let history = useHistory();

    const handleLogout = (event) =>{
      event.preventDefault()
      localStorage.removeItem('status');
      history.push("/");
  }

  //TODO: Witaj zmienić na login użytkownika

  return (
    <>

        <Welcome>Witaj użytkowniku</Welcome>
        <ButtonRoundedFull
          icon={<RiSurveyLine />}
          text="Find Cocktail"
          link="/findYourCocktail"
        />
        <ButtonRoundedFull
          icon={<RiTeamFill />}
          text="Daily random cocktail"
          link="/randomCocktail"
        />
        <ButtonRoundedFull
          icon={<MdAddAPhoto />}
          text="Your best Cocktail"
          link="/yourFavoriteCocktail"
        />
        <Button onClick={(e) => handleLogout(e)}>Wyloguj</Button>

    </>
  );
};

export default Home;
