import React from 'react'
import { Panel, Wrapper } from "../../../assets/template.styles";
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";

const AdminMessage = () => {
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
};

export default AdminMessage;