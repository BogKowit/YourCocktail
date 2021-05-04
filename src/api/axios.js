import axios from 'axios'

export const newMessageSend = async () => {
  await axios
    .post("http://localhost:1337/clientmsgs", {
      name: newMessage.name,
      phone: newMessage.phone,
      email: newMessage.email,
      text: newMessage.text,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
