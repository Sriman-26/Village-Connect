import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
const roote=document.getElementById("root");
import App from "./App";
import "./index.css";
const root=ReactDOM.createRoot(roote);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
