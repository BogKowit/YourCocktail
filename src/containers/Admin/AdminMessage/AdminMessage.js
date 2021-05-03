import React, {useEffect, useState} from 'react'
import { Panel, Wrapper } from "../../../assets/template.styles";
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";
import axios from "axios";
import styled from "styled-components";

  const MessageBox = styled.div`
  height: 400px;
  `
  const ListStyle = styled.ul``
  const Message = styled.li``

const AdminMessage = () => {
  const [message, setMessage] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:1337/clientmsgs", {})
      .then((response) => {
        console.log(response);
        setMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  return (
    <Wrapper>
      <Panel>
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Logowania"
          link="/adminHome"
        />
        <MessageBox>
          <ListStyle>
            {message.map((v) => (
              <Message key={v.id}>{v.text}</Message>
            ))}
          </ListStyle>
        </MessageBox>
      </Panel>
    </Wrapper>
  );
};

export default AdminMessage;