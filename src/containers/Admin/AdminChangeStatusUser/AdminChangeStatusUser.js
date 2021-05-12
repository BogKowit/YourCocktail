import React from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { Welcome } from '../../../assets/Login.style';
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import AdminUserListStatus from "../../../components/AdminUserListStatus/AdminUserListStatus";


const AdminChangeUserStatus = () => {

  return (
    <>
      <Welcome>User List</Welcome>
      <AdminUserListStatus />
      <ButtonRounded
        icon={<TiArrowBackOutline />}
        text="Powrót do panelu Logowania"
        link="/adminHome"
      />
    </>
  );
}
//TODO: Style
//TODO: zmiana statusu
export default AdminChangeUserStatus;