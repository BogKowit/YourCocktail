import React from "react";
import { Wrapper, Panel } from "./LoginPanel.style";
import LoginSelect from "./LoginSelect/LoginSelect";

const LoginPanel = () => {
  return (
    <Wrapper as="form">
      <Panel>
        <LoginSelect />
      </Panel>
    </Wrapper>
  );
};

export default LoginPanel;
