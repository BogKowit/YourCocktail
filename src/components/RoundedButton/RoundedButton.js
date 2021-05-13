import React from 'react'
import { Link } from 'react-router-dom';
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
    <Link to={link}>
      <LinkWrapper>
        {icon ? icon : null}
        <div>{text}</div>
      </LinkWrapper>
    </Link>
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