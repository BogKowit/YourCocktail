export const FormRegistration = {
  name: "",
  password: "",
  passwordCheck: "",
  email: "",
  checked: false,
  error: "",
};

const reducerTypes = {
  inputChange: "INPUT CHANGE",
  clearValue: "CLEAR VALUE",
  checkToggle: "CHECK TOGGLE",
  throwError: "THROW ERROR",
};