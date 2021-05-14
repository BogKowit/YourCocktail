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
    <LinkWrapper to={link}>
      <div>
        {icon ? icon : null}
        {text}
      </div>
    </LinkWrapper>
  );
};
