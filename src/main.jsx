import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { HelmetProvider } from "react-helmet-async";  // Import HelmetProvider
import App from "./App";
import "./index.css";
window.global = window;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <HelmetProvider>  {/* Wrap your app with HelmetProvider */}
        <main className="">
          <App />
        </main>
      </HelmetProvider>
    </NextUIProvider>
  </React.StrictMode>
);
