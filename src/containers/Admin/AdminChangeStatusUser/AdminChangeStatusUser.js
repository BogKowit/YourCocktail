import React, { useState, useEffect } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { BiUserX } from "react-icons/bi";
import {UserStatus,ListUser,ListUserLine,UserColumn,UserData,ButtonAdminStyle
} from "./AdminChangeStatusUser.style.js";
import { TopText } from "../../../components/Other/Other";


const AdminChangeUserStatus = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/dupas")
      .then((res) => {
        setUserData(res.data.filter((user) => user.status !== "admin"));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteUser = (e, id) => {
    axios.delete(`http://localhost:1337/dupas/${id}`).catch((err) => {
      console(err);
    });
    const newListUser = userData.filter((user) => user.id !== id);
    setUserData(newListUser);
  };

  if (localStorage.getItem("status") !== "admin") return <Redirect to={"/userHome"} />;

  return (
    <>
      <TopText text="User List" />
      <UserStatus>
        {userData.map((v) => (
          <ListUser key={v.id}>
            <ListUserLine>
              <UserColumn>Name:</UserColumn>
              <UserData>{v.name} </UserData>
            </ListUserLine>
            <ListUserLine>
              <UserColumn>E-mail:</UserColumn>
              <UserData>{v.email} </UserData>
            </ListUserLine>
            <ListUserLine>
              <p>Delete on click Red-Button</p>
              <ButtonAdminStyle
                text="Delete user"
                onClick={(e) => handleDeleteUser(e, v.id)}
                icon={<BiUserX />}
              />
            </ListUserLine>
          </ListUser>
        ))}
      </UserStatus>
      <ButtonRounded
        icon={<TiArrowBackOutline />}
        text="Admin panel"
        link="/adminHome"
      />
    </>
  );
}
export default AdminChangeUserStatus;