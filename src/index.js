import { render } from "react-dom";
import App from "./components/App.jsx";
import fakeBackend from "./api/fakeBackend";

fakeBackend();

render(<App />, document.getElementById("root"));
