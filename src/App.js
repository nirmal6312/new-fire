import React from "react";
import "./app.css";
import {  Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./screens/autorender";

import { Admin } from "./admin/admin";
import { Addproduct } from "./admin/Addproduct";
import { Allproducts } from "./admin/allproducts";
import { Allusers } from "./admin/Allusers";
import { AddProscreen } from "./admin/screens/addScreen";
import { AllProscreen } from "./admin/screens/Allproscreens";
import { Dashboard } from "./admin/screens/dashboard";
import { Allusersscreen } from "./admin/screens/allUserScreens";
import FreeAuth from "./screens/FreeAuthPage";
import { Cart } from "./products/cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/home" element={<FreeAuth/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>


{/* admin routes */}
      <Routes>
        <Route path="/addproduct" element={<AddProscreen/>}/>
        <Route path="/allproducts" element={<AllProscreen/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/allusers" element={<Allusersscreen/>}/>
      </Routes> 
    </>
  );
}

export default App;
