import React, { useContext } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../App";
import { Wrapper, Panel } from "../../assets/template.styles";
import LoginSelect from "./LoginSelect/LoginSelect";

const LoginPanel = () => {

  const{ user } = useContext(UserContext);
  if ( user ) return <Redirect to='/' />

  return (
    <Wrapper as="form">
      <Panel>
        <LoginSelect />
      </Panel>
    </Wrapper>
  );
};

export default LoginPanel;
