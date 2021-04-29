import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import { UserStatus } from "./AdminUserListStatus.style";
// import { ButtonAdminStyle } from '../../assets/Buttons.styles';
import styled from "styled-components";
import { BiUserX, BiUserCheck } from "react-icons/bi";

  const ButtonAdminStyle = styled.button`
    width: 20px;
    height: 20px;
    background-color: ${({ color }) =>
      color == "activeUser" ? "green" : "red"};
    border-radius: 50%;
  `;

  const ButtonAdmin = ({text, onClick, color, icon }) => {
    return (
      <>
        <label>{text}</label>
        <ButtonAdminStyle onClick={onClick} color={color} />
        {icon ? icon : null}
      </>
    );
  }

//TODO: Zmiana kolorów ze względu na status wpłaty
//TODO: DODAĆ IKONE NA MIEJSCE

const AdminUserListStatus = () => {
  const [userData, setUserData] = useState([]);

  console.log(...userData);
  useEffect(() => {
    axios
      .get("http://localhost:1337/dupas")
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <UserStatus>
      {userData.map((v) => (
        <li key={v.id}>
          <p>{v.name}</p>
          <p>{v.surname}</p>
          <p>{v.pay !== true ? "nie opłacono" : "opłacono"}</p>
          <ButtonAdmin
            text="Zmień status"
            onClick={(e) => handleUserStatus(e)}
            color="activeUser"
            icon={<BiUserCheck />}
          />
          <ButtonAdmin
            text="Usuń użytkownika"
            onClick={(e) => handleUserDelete(e)}
            color="deleteUser"
            icon={<BiUserX />}
          />
        </li>
      ))}
    </UserStatus>
  );
};

export default AdminUserListStatus;