import React from "react"
import { Label, Input } from "./SelectField.style";

const SelectField = ({ type, value, label, placeholder }) => {
  return (
    <>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder}></Input>
    </>
  );
};

export default SelectField;