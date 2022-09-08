import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App.jsx";
import AppProvider from "./Context/AppProvider.jsx";
import "./index.scss";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
