import React from 'react';
import { Welcome } from "../../../assets/Login.style";
import { Button } from "../../../assets/Buttons.styles"
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { RiFindReplaceLine, } from "react-icons/ri";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FaCocktail } from "react-icons/fa";
import { Redirect, useHistory } from "react-router-dom";

const Home = () => {
let history = useHistory();

    const handleLogout = (event) =>{
      event.preventDefault()
      localStorage.removeItem('status');
      history.push("/");
  }

    // if (localStorage.getItem('status')!=='user') return <Redirect to={'/'} />
  return (
    <>
      <Welcome>Witaj użytkowniku</Welcome>
      <ButtonRounded
        icon={<RiFindReplaceLine />}
        text="Find Cocktail"
        link="/findYourCocktail"
      />
      <ButtonRounded
        icon={<GiPerspectiveDiceSixFacesRandom />}
        text="Daily random cocktail"
        link="/randomCocktail"
      />
      <ButtonRounded
        icon={<FaCocktail />}
        text=" Your best Cocktail"
        link="/yourFavoriteCocktail"
      />
      <Button onClick={(e) => handleLogout(e)}>LogOut</Button>
    </>
  );
};

export default Home;
