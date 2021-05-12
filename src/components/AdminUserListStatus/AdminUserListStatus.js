import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import { BiUserX, } from "react-icons/bi";
import {UserStatus,ListUser,ListUserLine,UserColumn,UserData, ButtonAdminStyle} from "./AdminUserListStatus.style.js"

  const ButtonAdmin = ({ text, onClick, color, icon}) => {
    return (
      <>
        <label>{text}</label>
        <ButtonAdminStyle onClick={onClick} color={color}>
          {icon ? icon : null}
        </ButtonAdminStyle>
      </>
    );
  };

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

  const handleDeleteUser = (e, id) => {
    console.log(id);
    axios
      .delete(`http://localhost:1337/dupas/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console(err);
      });
    const newListUser = userData.filter((user) => user.id !== id);
    setUserData(newListUser);
  };

  return (
    <UserStatus>
      {userData.map((v) => (
        <ListUser key={v.id}>
          <ListUserLine>
            <UserColumn>Nazwa:</UserColumn>
            <UserData>{v.name} </UserData>
          </ListUserLine>

          <ListUserLine>
            <UserColumn>E-mail:</UserColumn>
            <UserData>{v.email} </UserData>
          </ListUserLine>
          <ButtonAdmin
            text="Usuń użytkownika"
            onClick={(e) => handleDeleteUser(e, v.id)}
            icon={<BiUserX />}
          />
        </ListUser>
      ))}
    </UserStatus>
  );
};

export default AdminUserListStatus;

//FIXME: przywracanie ponownej listy użytkoników
//TODO: Ostylowacc to lepiej
//TODO: Stworzyć wyszukiwarkę