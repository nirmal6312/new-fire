import React from "react";
import { Home } from "./screens/Home";
import "./app.css";
import { About } from "./screens/About";
import { Service } from "./screens/service";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./screens/Login";
import { Cart } from "./home-components/Cart";
import { Tableusers } from "./home-components/tabledata";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
