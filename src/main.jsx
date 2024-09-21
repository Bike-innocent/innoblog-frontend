// import React from "react";
// import ReactDOM from "react-dom/client";
// import { NextUIProvider } from "@nextui-org/react";
// import { HelmetProvider } from "react-helmet-async";  // Import HelmetProvider
// import App from "./App";
// import "./index.css";
// window.global = window;

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <NextUIProvider>
//       <HelmetProvider>  {/* Wrap your app with HelmetProvider */}
//         <main className="">
//           <App />
//         </main>
//       </HelmetProvider>
//     </NextUIProvider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
import axios from "axios";

window.global = window;

const fetchOgTags = async (slug) => {
    try {
        const response = await axios.get(`https://backend.innoblog.com.ng/posts/${slug}`);
        const { title, description, image, url } = response.data;

        // Set the OG tags in the document head
        document.querySelector('meta[property="og:title"]').setAttribute('content', title);
        document.querySelector('meta[property="og:description"]').setAttribute('content', description);
        document.querySelector('meta[property="og:image"]').setAttribute('content', image);
        document.querySelector('meta[property="og:url"]').setAttribute('content', url);
    } catch (error) {
        console.error('Error fetching OG tags:', error);
    }
};

// Extract slug from URL
const pathParts = window.location.pathname.split('/');
const slug = pathParts[pathParts.length - 1]; // Assuming slug is the last part of the path

if (slug) {
    fetchOgTags(slug);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <HelmetProvider>
        <main className="">
          <App />
        </main>
      </HelmetProvider>
    </NextUIProvider>
  </React.StrictMode>
);
