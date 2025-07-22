// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CarDetails } from "./pages/CarDetails";
import { Favorites } from "./pages/Favorites";


import "./App.css";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<CarDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
