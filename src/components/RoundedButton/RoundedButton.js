import React from 'react'
import { Button } from '../../assets/Buttons.styles';
import {
  LinkTo,
  LinkWrapper,
  LinkWrapperFull,
  LinkToMiddle,
} from "../../assets/Login.style";

export const ButtonClick = ({ text, onClick, value}) => 
<Button onClick={(e)=>{onClick(e)}} value={value}>{text}</Button>;

export const ButtonRounded = ({ icon, text, link }) => {
  return (
    <LinkWrapper>
      {icon ? icon : null}
      <LinkTo to={link}>{text}</LinkTo>
    </LinkWrapper>
  );
};

export const ButtonRoundedFull = ({ icon, text, link }) => {
  return (
    <LinkWrapperFull>
      {icon ? icon : null}
      <LinkToMiddle to={link}>{text}</LinkToMiddle>
    </LinkWrapperFull>
  );
};