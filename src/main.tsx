import "./tailwind.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const ROOT = document.getElementById("root");

if (!ROOT) throw new Error("root is not found");

ReactDOM.createRoot(ROOT).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
