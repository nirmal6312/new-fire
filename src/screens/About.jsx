import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../common-pages/header";

function About(){
    return(
        <>
        <Header/>
        <h1>This is About page....</h1>
        <Link to="/">back</Link>
        </>
    )
}
export{About}