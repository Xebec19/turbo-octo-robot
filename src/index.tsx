import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Fragment>
    <div id="portal-root"></div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Fragment>
);
