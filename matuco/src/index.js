import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./services/themeContext/Theme.context";
import { AuthenticationContextProvider } from "./services/authenticationContext/Authentication.context";
import { APIContextProvider } from "./services/apiContext/API.context";
import { ShoppingCartProvider } from "./services/shoppingCartContext/ShoppingCart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <APIContextProvider>
    <React.StrictMode>
      <ShoppingCartProvider>
        <ThemeContextProvider>
          <AuthenticationContextProvider>
            <App />
          </AuthenticationContextProvider>
        </ThemeContextProvider>
      </ShoppingCartProvider>
    </React.StrictMode>
  </APIContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
