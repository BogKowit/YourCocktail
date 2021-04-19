import React from "react"
import { Label, Input } from "./SelectField.style";

const SelectField = ({ type, value, label, placeholder, onChange,}) => {
  return (
    <>
      <Label>{label}</Label>
      <Input onChange={onChange} type={type} placeholder={placeholder}></Input>
    </>
  );
};

export default SelectField;