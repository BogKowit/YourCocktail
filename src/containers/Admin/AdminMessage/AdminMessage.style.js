import styled from "styled-components";

export const Messages = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0;
  padding: 0;
`;

export const SimpleMessage = styled.li`
  font-size: 14px;
  background-color: rgba(20, 88, 88, 0.3);
  margin: 3px 0;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid grey;
  width: 100%;
  min-width: 300px;
  @media (max-width: 410px) {
    min-width: 270px;
  }
`;

export const WrapperMessage = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  word-wrap: break-word;
  @media (max-width: 410px) {
    display: flex;
    flex-direction: column;
    width: 250px;
  }
  > :first-child {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    @media (max-width: 410px) {
      border-bottom: 1px solid grey;
    }
  }
  > p {
    overflow: hidden;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
`;

export const Scroll = styled.div`
  overflow-y: scroll;
  width: 90%;
  height: 75%;
  margin: 10px;
  background-color: rgba(20, 88, 88, 0.2);
  padding: 15px;
  border: 1px solid grey;
  border-radius: 10px;
`;
