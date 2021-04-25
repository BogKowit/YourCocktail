import React from 'react'
import { Panel, Wrapper } from "../../../assets/template.styles";
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";
import { Welcome } from '../../../assets/Login.style';

function UserMap() {
  return (
    <Wrapper>
      <Panel>
        <Welcome>Mapa biegu</Welcome>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1dlfbREwZKOb6AhsuAT-6x23sQGVT40hs"
          width="280"
          height="240"
        />
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Użytkownika"
          link="/userHome"
        />
      </Panel>
    </Wrapper>
  );
}

export default UserMap
