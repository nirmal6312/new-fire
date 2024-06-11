import React from "react";
import { AdminHeader } from "../AdminHeader";
import { Addproduct } from "../Addproduct";

function AddProscreen() {
  return (
    <>
      <div className="main-admin-wrapper">
        <div className="header-wrapper">
          <AdminHeader />
        </div>
        <div className="addproduct-wrapper">
          <Addproduct />
        </div>
      </div>
    </>
  );
}

export { AddProscreen };
