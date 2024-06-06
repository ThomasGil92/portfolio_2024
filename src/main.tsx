
//import * as ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import * as React from "react";
import App from "./App.tsx";

import "./globals.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
