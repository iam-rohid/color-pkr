import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import ThemeProvider from "./hooks/useTheme";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
