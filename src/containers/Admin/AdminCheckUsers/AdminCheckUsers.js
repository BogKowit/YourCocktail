import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Panel, Wrapper } from "../../../assets/template.styles";
import { ButtonRounded } from "../../../components/RoundedButton/RoundedButton";
import { TiArrowBackOutline } from "react-icons/ti";
import { SelectField } from "../../../components/SelectField/SelectField";
import DropdownCombobox from "./AdminCheckDownList";





const AdminCheckUsers = () => {
  const [userData, setUserData] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:1337/dupas")
        .then((res) => {
          console.log(res);
          const data = res.data.map(res =>(
            res.name
          ));
          setUserData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);



  return (
    <Wrapper>
      <Panel>
        <DropdownCombobox userData={{userData}} />
        <ButtonRounded
          icon={<TiArrowBackOutline />}
          text="Powrót do panelu Logowania"
          link="/adminHome"
        />
      </Panel>
    </Wrapper>
  );
};

export default AdminCheckUsers;
