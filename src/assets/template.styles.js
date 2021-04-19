import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Panel = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 300px;
  height: 350px;
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
export const PanelM = styled(Panel)`
  height: 500px;
`;

export const PanelS = styled(Panel)`
  height: 450px;
`;
//zmiana wielkości tabeli przy zmianie zakładki