import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/sanitize/assets.css";
import "virtual:uno.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
