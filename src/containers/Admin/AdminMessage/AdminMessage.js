import React, {useEffect, useState} from 'react'
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";
import axios from "axios";
import styled from "styled-components";
import { Welcome } from '../../../assets/Login.style';


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
    width: 100%;
    min-width: 300px;
    @media (max-width: 410px) {
      min-width: 270px;}
  `;

  const WrapperMessage = styled.div`
    display: grid;
    grid-template-columns: 120px 1fr;

    @media (max-width: 410px) {
      display: flex;
      flex-direction: column;
      width: 250px;
    }
    > :first-child {
      border-bottom: 1px solid black;
      font-size: 16px;
      font-weight: bold;
      margin: 0;
      @media (max-width: 410px) {
        border-bottom: 1px solid grey;
      }
    }
  `;

  const Scroll = styled.div`
    overflow-y: scroll;
    width: 90%;
    height: 90%;
    margin: 10px;
    background-color: rgba(20, 88, 88, 0.2);
    padding: 15px;
    border: 1px solid grey;
    border-radius: 10px;
  `;

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


  const handleDeleteMessage = (e, id) => {
    axios
      .delete(`http://localhost:1337/clientmsgs/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console(err);
      });
    const newMessageList = message.filter((list) => list.id !== id);
    setMessage(newMessageList);
  };

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
        text="Powrót do panelu Logowania"
        link="/adminHome"
      />
      </>
  );
};

export default AdminMessage;

//TODO:Po kliknięciu otwiera się modal z danymi użytkownika
//TODO:Za długie wiadomości zmiejszają rozmiar czcionki lub coś innego