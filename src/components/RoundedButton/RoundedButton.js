import React from 'react'
import {
  LinkTo,
  LinkWrapper,
  LinkWrapperFull,
  LinkToMiddle,
} from "../../assets/Login.style";

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