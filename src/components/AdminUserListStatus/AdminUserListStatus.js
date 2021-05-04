import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import { BiUserX, BiUserCheck } from "react-icons/bi";
// import { ButtonAdminStyle } from '../../assets/Buttons.styles';


  const UserStatus = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 12px;
  overflow-y: scroll;
  height: 60%;
`;


//TODO:https://dev.to/abdulbasit313/learn-how-to-create-react-js-table-with-hooks-that-has-delete-functionality-too-2jjb

  const ListUser = styled.li`
    background-color: rgba(20, 88, 88, 0.3);
    border-radius: 10px;
    padding: 5px;
    margin: 2px;
    border: 1px solid grey;
  `;
  const ListUserLine = styled.div`
    display: flex;
    margin: 0px;
    padding: 0px;
  `;
  const UserColumn = styled.p`
  margin: 1px 0;
  `;
  const UserData = styled.p`
  margin: 1px 0;
  `
  const ButtonAdminStyle = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${({ color }) =>
      color == "activeUser" ? "green" : "red"};
    border-radius: 50%;
  `;
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
  };

  const SearchBarTitle = styled.div`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `;

  const SearchBar = () => (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <SearchBarTitle>Wyszukaj użytkownika</SearchBarTitle>
      </label>
      <input type="text" id="header-search" placeholder="Wyszkuj se" name="s" />
      <button type="submit">Search</button>
    </form>
  );
  const Search = () => {};
  //https://www.emgoto.com/react-search-bar/
  return (
    <UserStatus>
      {/* <SearchBar  */}
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