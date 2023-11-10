import "virtual:uno.css";
import "./index.css";

import App from "./app.jsx";
import React from "react";
import { render } from "react-dom";

// import App from "./app.jsx";
// import ReactDOM from "react-dom/client";

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const container = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
