import React from "react";
import { Navigate, Routes, redirect } from "react-router-dom";

import Cookies from "universal-cookie";
import AuthComponent from "./Home";
import { Login } from "./Login";
const cookies = new Cookies();

export default function ProtectedRoutes() {
  const token = cookies.get("TOKEN");
  console.log(token);
  return (
    <>
    {
      token ? <AuthComponent /> : <Login />
    }
    </>
  );
}
