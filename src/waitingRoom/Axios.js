import Axios from "axios";

export const axiosFetch = Axios.create(({
  baseURL: "http://localhost:1337",
  headers: { Auth: "Simple AUTH"},
  timeout: 3000,
}))
