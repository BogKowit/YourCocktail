import React from 'react'
import { Panel, Wrapper } from '../../../assets/template.styles'
import { ButtonRounded } from '../../../components/RoundedButton/RoundedButton'
import { TiArrowBackOutline } from "react-icons/ti";
import { Welcome } from '../../../assets/Login.style';

const AdminUserStatus = () =>{
  return (
    <Wrapper>
      <Panel>
        <Welcome>Wiadomości od użytkowników</Welcome>
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Logowania"
          link="/adminHome"
        />
      </Panel>
    </Wrapper>
  );
}

export default AdminUserStatus
