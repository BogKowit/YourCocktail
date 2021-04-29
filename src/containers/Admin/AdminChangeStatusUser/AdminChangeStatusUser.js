import React, { useContext, useState, useEffect, useReducer } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { UserContext } from '../../../App';
import { Welcome } from '../../../assets/Login.style';
import { Panel, Wrapper } from '../../../assets/template.styles';
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import AdminUserListStatus from "../../../components/AdminUserListStatus/AdminUserListStatus";
import Scroll from "../../../components/Scroll/Scroll";
// import { AdminUserPayList } from "./AdminUserPayList.styled";

const adminChangeUserStatus = () => {
  return (
    <Wrapper>
      <Panel>
        <Welcome>Lista użytkowników</Welcome>
        {/* <Scroll> */}
          <AdminUserListStatus />
        {/* </Scroll> */}
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Logowania"
          link="/adminHome"
        />
      </Panel>
    </Wrapper>
  );
}

//TODO: Style
//TODO: zmiana statusu
export default adminChangeUserStatus;