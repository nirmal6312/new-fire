import React from "react";
import { AdminHeader } from "../AdminHeader";
import { Addproduct } from "../Addproduct";
import { Allproducts } from "../allproducts";

function Dashboard() {
  return (
    <>
      <div className="main-admin-wrapper">
        <div className="header-wrapper">
          <AdminHeader />
        </div>
        <div className="addproduct-wrapper">
          <h1>this is Dashboard</h1>
        </div>
      </div>
    </>
  );
}

export { Dashboard };
