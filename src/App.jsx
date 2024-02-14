/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Product from "./components/ProductPage/Product";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path="product" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
