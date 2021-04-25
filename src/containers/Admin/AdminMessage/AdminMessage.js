import React from 'react'
import { Panel, Wrapper } from "../../../assets/template.styles";
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";

export default function AdminMessage() {
  return (
    <Wrapper>
      <Panel>
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Logowania"
          link="/adminHome"
        />
      </Panel>
    </Wrapper>
  );
}
