import { useState } from "react";
import './index.css';
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  const router = createBrowserRouter([
    {
      path: "/SecureVault-MongoDB",
      element: (
        <>
          <Navbar />
          <Home/>
          <Footer/>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer/>
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer/>
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
