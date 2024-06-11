import React from "react";
import { AdminHeader } from "../AdminHeader";
import { Addproduct } from "../Addproduct";
import { Allproducts } from "../allproducts";

function AllProscreen() {
  return (
    <>
      <div className="main-admin-wrapper">
        <div className="header-wrapper">
          <AdminHeader />
        </div>
        <div className="addproduct-wrapper">
          <Allproducts/>
        </div>
      </div>
    </>
  );
}

export { AllProscreen };
