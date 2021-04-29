import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Panel, Wrapper } from "../../../assets/template.styles";
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";
//TODO: Wyszukiwanie użytkownika
//TODO: global user fetch?

const AdminCheckUsers = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/dupas")
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <Panel>
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Logowania"
          link="/adminHome"
        />
        <ul>
          {/* {userData.map((v) => (
            <li>{v.name}</li>
          ))} */}
        </ul>
      </Panel>
    </Wrapper>
  );
};

export default AdminCheckUsers;
