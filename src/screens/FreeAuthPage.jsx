import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import  Header  from "../common-pages/header";
import { Products } from "../products/product";
import { Footer } from "../common-pages/footer";
import { Login } from "./Login";



const cookies = new Cookies();

const token = cookies.get("TOKEN");
const updatetoken = token?.token
export default function FreeAuth() {
  
    const [message,setMessage] = useState("")

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://exciting-alabaster-rosehip.glitch.me/auth-endpoint",
      headers: {
        Authorization: `Bearer ${updatetoken}`,
      },
    };

    // make the API call+
    axios(configuration)
      .then((result) => {
        setMessage(result.data);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

 
  return(
    <>
    <Header/>
   {token ? <Products/> : <Login/>}
    <Footer/>
    
  
    </>
  )
}
