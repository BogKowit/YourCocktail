import { FiUserPlus } from "react-icons/fi";
import { BsChatDots, BsQuestionCircle } from "react-icons/bs";
import { TiArrowBackOutline } from "react-icons/ti"
import { LinkTo, LinkWrapper } from "../../assets/Login.style";

export const ButtonRegister = () =>{
  return (
    <LinkWrapper>
      <FiUserPlus />
      <LinkTo to="/register"> Zarejestruj użytkownika.</LinkTo>
    </LinkWrapper>
  );
}

export const ButtonPasswordReset = () =>{
  return (
        <LinkWrapper>
          <BsQuestionCircle />
          <LinkTo to="/passwordReset">Zapomniałeś Hasła?</LinkTo>
        </LinkWrapper>
  )
}

export const ButtonContact = () => {
  return (
    <LinkWrapper>
      <BsChatDots />
      <LinkTo to="/contact">Skontaktuj się z nami!</LinkTo>
    </LinkWrapper>
  );
}

export const ButtonBack = () => {
  return (
    <LinkWrapper>
      <TiArrowBackOutline />
      <LinkTo to="login">Powrót do panelu Logowania</LinkTo>
    </LinkWrapper>
  );
};