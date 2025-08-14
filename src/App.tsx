// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Collection } from "./pages/Collection";
import { CarDetails } from "./pages/CarDetails";
import { Favorites } from "./pages/Favorites";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:id" element={<CarDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
