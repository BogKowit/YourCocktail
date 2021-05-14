import React, {useEffect, useState} from 'react'
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";
import axios from "axios";
import styled from "styled-components";
import { Welcome } from '../../../assets/Login.style';
import { Redirect } from "react-router-dom";
import {Messages,SimpleMessage,WrapperMessage,Scroll} from './AdminMessage.style'

const AdminMessage = () => {
  const [message, setMessage] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:1337/clientmsgs")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])


  const handleDeleteMessage = (e, id) => {
    axios
      .delete(`http://localhost:1337/clientmsgs/${id}`)
      .catch((err) => {
        console(err);
      });
    const newMessageList = message.filter((list) => list.id !== id);
    setMessage(newMessageList);
  };

  if (localStorage.getItem("status") !== "admin")
    return <Redirect to={"/userHome"} />;
  return (
    <>
      <Welcome>Messages</Welcome>
    <Scroll>
      <Messages>
        {message.map((v) => (
          <SimpleMessage key={v.id}>
            <WrapperMessage>
              <p>Sended:</p>
              <p>{v.created_at}</p>
            </WrapperMessage>
            <WrapperMessage>
              <p>Message:</p>
              <p>{v.text}</p>
            </WrapperMessage>
            <WrapperMessage>
              <p>Name:</p>
              <p>{v.name}</p>
            </WrapperMessage>
            <WrapperMessage>
              <p>Phone contact:</p>
              <p>{v.phone}</p>
            </WrapperMessage>
            <WrapperMessage>
              <p>E-mail contact:</p>
              <p>{v.email}</p>
            </WrapperMessage>
            <button onClick={(e) => handleDeleteMessage(e, v.id)}>
              User Delete
            </button>
          </SimpleMessage>
        ))}
      </Messages>
      </Scroll>
      <ButtonRounded
        icon={<TiArrowBackOutline />}
        text="Admin"
        link="/adminHome"
      />
      </>
  );
};

export default AdminMessage;

//TODO:Po kliknięciu otwiera się modal z danymi użytkownika
//TODO:Za długie wiadomości zmiejszają rozmiar czcionki lub coś innego