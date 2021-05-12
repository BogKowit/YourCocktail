import styled from 'styled-components';

  export const UserStatus = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 12px;
    overflow-y: scroll;
    height: 60%;
  `;
  export const ListUser = styled.li`
    background-color: rgba(20, 88, 88, 0.3);
    border-radius: 10px;
    padding: 5px;
    margin: 2px;
    border: 1px solid grey;
  `;
  export const ListUserLine = styled.div`
    display: flex;
    margin: 0px;
    padding: 0px;
  `;
  export const UserColumn = styled.p`
    margin: 1px 0;
  `;
  export const UserData = styled.p`
    margin: 1px 0;
  `;
  export const ButtonAdminStyle = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${({ color }) =>
      color == "activeUser" ? "green" : "red"};
    border-radius: 50%;
  `;