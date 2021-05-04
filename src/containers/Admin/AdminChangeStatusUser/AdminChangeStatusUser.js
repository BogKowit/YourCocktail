import React, { useContext, useState, useEffect, useReducer } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { Welcome } from '../../../assets/Login.style';
import { Panel, Wrapper } from '../../../assets/template.styles';
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import AdminUserListStatus from "../../../components/AdminUserListStatus/AdminUserListStatus";
import styled from "styled-components";


const AdminChangeUserStatus = () => {

  return (
    <Wrapper>
      <Panel>
        <Welcome>Lista użytkowników</Welcome>
        <AdminUserListStatus />
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
export default AdminChangeUserStatus;