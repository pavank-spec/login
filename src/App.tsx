import React from "react";
import Login from "./components/Login";
import MyLogin from "./components/MyLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLogin />} />
          <Route path="/stpeter/home" element={<Home />} />
          <Route path="/prd" element={<Products />} />
          <Route path="/cont" element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}