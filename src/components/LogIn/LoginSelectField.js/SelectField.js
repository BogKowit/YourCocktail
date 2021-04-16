import { Label, Input } from "./SelectField.style";
import React from "react"

const LoginSelectField = ({ type, value, label, placeholder }) => {
  return (
    <>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder}></Input>
    </>
  );
};

export default LoginSelectField;