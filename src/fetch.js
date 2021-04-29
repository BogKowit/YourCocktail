import React, { useState } from "react";
import axios from "axios";


export const dataFetch = () =>{
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
}

