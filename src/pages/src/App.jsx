
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Index from './pages/home/Index.jsx';
import Contact from './pages/home/Contact';
import About from './pages/about/About';

// Define the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
       { path: '/', element: <Index /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: < About/> },
    
    ],
  },
 
]);

function App() {
    return (
       
            <RouterProvider router={router} />
        
    );
}

export default App;
