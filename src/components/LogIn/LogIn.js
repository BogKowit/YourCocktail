import React from "react";
import { Wrapper, Panel, Panel2 } from "./Login.style";
import LoginSelect from "./LoginSelect/LoginSelect";
import LoginRegistration from "./LoginRegistration/LoginRegistration";
import LoginContact from "./LoginContact/LoginContact";
import LoginPasswordReset from "./LoginPasswordReset/LoginPasswordReset";


const LogIn = () => {
  return (
    <Wrapper as="form">
      <Panel>
        <LoginSelect />
      </Panel>
      <Panel2>
        <LoginRegistration />
      </Panel2>
      <Panel2>
        <LoginContact />
      </Panel2>
      <Panel2>
        <LoginPasswordReset />
      </Panel2>
    </Wrapper>
  );
}

export default LogIn;