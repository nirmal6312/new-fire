import React from "react";
import { AdminHeader } from "../AdminHeader";
import { Addproduct } from "../Addproduct";
import { Allproducts } from "../allproducts";
import { Allusers } from "../Allusers";

function Allusersscreen() {
  return (
    <>
      <div className="main-admin-wrapper">
        <div className="header-wrapper">
          <AdminHeader />
        </div>
        <div className="addproduct-wrapper">
          <Allusers/>
        </div>
      </div>
    </>
  );
}

export { Allusersscreen };
