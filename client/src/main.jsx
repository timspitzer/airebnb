import "virtual:uno.css";
import "./index.css";

import App from "./app.jsx";
import React from "react";
import { render } from "react-dom";

const container = document.getElementById("root");

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
