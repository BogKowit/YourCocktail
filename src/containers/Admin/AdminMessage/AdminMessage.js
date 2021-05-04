import React, {useEffect, useState} from 'react'
import { Panel, Wrapper } from "../../../assets/template.styles";
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";
import axios from "axios";
import styled from "styled-components";
import { Welcome } from '../../../assets/Login.style';
import { BiMessageX } from "react-icons/bi"


  const Messages = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0;
    padding: 0;
  `;
  const SimpleMessage = styled.li`
    font-size: 14px;
    background-color: rgba(20, 88, 88, 0.3);
    margin: 3px 0;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid grey;
  `;

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
  
const AdminMessage = () => {
  const [message, setMessage] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:1337/clientmsgs")
      .then((response) => {
        console.log(response);
        setMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const handleDeleteMessage = () =>{

  }
  
  return (
    <Wrapper>
      <Panel>
        <Welcome>Wiadomości</Welcome>
        <Messages>
          {message.map((v) => (
            <SimpleMessage key={v.id}>
              {v.text}
              <ButtonAdmin
                text="Usuń wiadomość"
                onClick={(e) => handleDeleteMessage(e, v.id)}
                icon={<BiMessageX />}
              />
            </SimpleMessage>
          ))}
        </Messages>
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Logowania"
          link="/adminHome"
        />
      </Panel>
    </Wrapper>
  );
};

export default AdminMessage;

//TODO:Po kliknięciu otwiera się modal z danymi użytkownika
//TODO:Za długie wiadomości zmiejszają rozmiar czcionki lub coś innego