import React from 'react'
import { Welcome } from '../../../assets/Login.style';
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { Button } from '../../../assets/Buttons.styles';
import { TiMessage } from 'react-icons/ti'
import { RiFindReplaceLine } from "react-icons/ri";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FaCocktail } from "react-icons/fa";
import { FiUserX } from "react-icons/fi"
import { Redirect, useHistory } from "react-router-dom";

const AdminHome = () => {
  let history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("status");
    history.push("/");
  };

  if (localStorage.getItem('status')!=='admin') return <Redirect to={"/userHome"} />;

  return (
    <>
      <Welcome>Administration panel</Welcome>
      <ButtonRounded icon={<TiMessage />} text="Asks" link="/adminMessage" />
      <ButtonRounded
        icon={<FiUserX />}
        text="Delete user"
        link="/adminChangeUserStatus"
      />
      <ButtonRounded
        icon={<RiFindReplaceLine />}
        text="Find cocktail"
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
}

export default AdminHome