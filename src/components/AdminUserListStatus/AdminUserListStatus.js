import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import { UserStatus } from "./AdminUserListStatus.style";
import styled from "styled-components";
import { BiUserX, BiUserCheck } from "react-icons/bi";

  const ButtonAdminStyle = styled.button`
    width: 20px;
    height: 20px;
    background-color: ${({ color }) =>
      color == "activeUser" ? "green" : "red"};
    border-radius: 50%;
  `;

  const ListUser = styled.li`
    display: flex;
    flex-direction: column;
  `
  const UserDataTable = styled.div`
  display:flex;
  `
  const DataTable = styled.p`
  width: 50px;
  `

//TODO:https://dev.to/abdulbasit313/learn-how-to-create-react-js-table-with-hooks-that-has-delete-functionality-too-2jjb
  const ButtonAdmin = ({ text, onClick, color, icon, key }) => {
    return (
      <>
        <label>{text}</label>
        <ButtonAdminStyle onClick={onClick} color={color} key={key}>
          {icon ? icon : null}
        </ButtonAdminStyle>
      </>
    );
  };

//TODO: Zmiana kolorów ze względu na status wpłaty
//TODO: DODAĆ IKONE NA MIEJSCE
const usersDownload = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(()=>{
      if(success){
        resolve(...userData);
      } else {
        reject({message: 'Error'});
      }
    }, 2000)
  });
}


const AdminUserListStatus = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState()

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

  const handleDeleteUser = (e, id,name) => {
    console.log(id+name)
      useEffect(() => {
    axios
    .delete(`http://localhost:1337/dupas/${id}`)
    .then(res =>{
      console.log(res);
      console.log(res.data)
    })
    .catch((err) =>{
      console(err);
    });
  }, []);
  }

  const handleUserStatus = (e, id) =>{
    console.log(id);
  }
  return (
    <UserStatus>
      {userData.map((v) => (
        <ListUser key={v.id + v.name}>
          <UserDataTable>
            <DataTable>Imię:</DataTable>
            <p>{v.name} </p>
          </UserDataTable>
          <UserDataTable>
            <DataTable>Nazwisko:</DataTable>
            <p>{v.surname}</p>
          </UserDataTable>
          {/* <p>{v.pay !== true ? "nie opłacono" : "opłacono"}</p> */}
          {/* <ButtonAdmin */}
          {/* // text="Zmień status" */}
          {/* // onClick={(e) => handleUserStatus(e, v.id)} */}
          {/* // color="activeUser" */}
          {/* // icon={<BiUserCheck />} */}
          {/* // key={v.id + v.name} */}
          {/* // /> */}
          <ButtonAdmin
            text="Usuń użytkownika"
            // onClick={(e) => handleUserDelete(e)}
            onClick={(e) => handleDeleteUser(e, v.id, v.name)}
            color="deleteUser"
            icon={<BiUserX />}
            key={v.id + v.name}
          />
        </ListUser>
      ))}
    </UserStatus>
  );
};

export default AdminUserListStatus;