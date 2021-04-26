// const validate = registerFomValue => {
//   if (!registerFomValue.email) {
//     return "e-mail jest wymagany";
//   } else if (
//     !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
//       registerFomValue.email)) {
//     return "Zły e-mail";
//   }

//   if (!registerFomValue.name) {
//         return "Imię jest wymagane";
//   } else if (form.name.length < 2) {
//     return "imię jezt za krótkie"
//   }

//   if (!registerFomValue.password) {
//     return "hasło jest wymagane"
//   } else if (registerFomValue.password.length < 5){
//     return "hasło jest za krótkie"
//   }

//   if (!registerFomValue.passwordCheck) {
//     return "Powtórzenie hasła jest wymagane";
//   } else if (registerFomValue.passwordCheck.length < 5){
//     return "Powtórzone hasło jest za krótkie"
//   }

//   if (registerFomValue.password !== registerFomValue.passwordCheck) {
//     return "Hasła się różnią"
//   }

//   //jeżeli nic nie znalazła to wszystko poszło SpoczkoOczko
//   return null
// }
// const handleAddUser = () = {
//   name: registerFomValue.name,
//   password: registerFomValue.password,
//   passwordRep: registerFomValue.passwordCheck,
//   email: registerFomValue.email,
// };