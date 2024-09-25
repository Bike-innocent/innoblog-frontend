import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";

import App from "./App";
import "./index.css";


// Import CSS for AOS and Swiper
import 'aos/dist/aos.css';

// <link rel="preconnect" href="https://fonts.googleapis.com/" >
// <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
// <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Inter:wght@100;900&display=swap" rel="stylesheet" />
// // import 'swiper/swiper-bundle.min.css';


 import './style.css';
 import './plugins/swiper-bundle.min.css';
 import './plugins/magnific-popup.css';


// Initialize AOS
import AOS from 'aos';
AOS.init();
window.global = window;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
     
        <main className="">
          <App />
        </main>
      
    </NextUIProvider>
  </React.StrictMode>
);

