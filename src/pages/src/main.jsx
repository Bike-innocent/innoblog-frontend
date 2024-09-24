import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";

import App from "./App";
import "./index.css";


// Import CSS for AOS and Swiper
import 'aos/dist/aos.css';


// import 'swiper/swiper-bundle.min.css';


// import '../../assets/css/style.css'; // Assuming this is your Tailwind custom styles

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

