import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import App from "./App.jsx";
import "./index.css";

const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadScript googleMapsApiKey={apiKey}>
        <App />
      </LoadScript>
    </BrowserRouter>
  </React.StrictMode>
);
