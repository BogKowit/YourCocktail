import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  height: 80%;
`;

export const Panel = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 90vw;
  height: 80vh;
  border-radius: 25px;
  box-shadow: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
  font-family: "Montserrat", sans-serif;
  color: white;
`;

export const PanelLogin = styled(Panel)`
  height: 370px;
`
export const PanelRegistration = styled(Panel)`
  height: 450px;
`;
export const PanelResetPassword = styled(Panel)`
  height: 370px;
`;
export const PanelContact = styled(Panel)`
  height: 470px;
`;
//zmiana wielkości tabeli przy zmianie zakładki