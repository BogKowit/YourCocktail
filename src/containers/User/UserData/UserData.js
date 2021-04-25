import React from 'react'
import { Panel, Wrapper } from '../../../assets/template.styles'
import { TiArrowBackOutline } from 'react-icons/ti'
import { ButtonRounded } from '../../../components/RoundedButton/RoundedButton';
import { Welcome } from '../../../assets/Login.style';

const UserData = () => {
  return (
    <Wrapper>
      <Panel>
        <Welcome>Witaj w Panelu użytkownika</Welcome>
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Użytkownika"
          link="/userHome"
        />
      </Panel>
    </Wrapper>
  );
}

export default UserData
