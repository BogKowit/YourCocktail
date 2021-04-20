import React from "react"
import { Label, Input } from "./SelectField.style";

export const SelectField = ({ type, value, label, placeholder, onChange,}) => {
  return (
    <>
      <Label>{label}</Label>
      <Input onChange={onChange} type={type} placeholder={placeholder}></Input>
    </>
  );
};

export const SelectFieldRegistration = ({ type, value, label, placeholder, onChange, name }) => {
  return (
    <>
      <Label>{label}</Label>
      <Input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
      ></Input>
    </>
  );
};
