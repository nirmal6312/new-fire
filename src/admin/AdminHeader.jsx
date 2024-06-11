import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import user from "../images/user.jpg"

function AdminHeader(){
    return(
        <>
        <section id="adminbody">
       
         <aside class="sidebar">
      <div class="sidebar-header">
        <img src={`${logo}`} alt="logo" />
        <h2>ShopHere</h2>
      </div>
      <ul class="sidebar-links">
        <h4>
          <span>Main Menu</span>
          <div class="menu-separator"></div>
        </h4>
        <li>
          <a href="#">
            <span class="material-symbols-outlined"> dashboard </span
            ><Link to="/dashboard">Dashboard</Link>
            </a
          >
        </li>
        <li>
          <a href="#"
            ><span class="material-symbols-outlined"> overview </span
            ><Link to="/allproducts">All products</Link></a
          >
        </li>
        <li>
          <a href="#"
            ><span class="material-symbols-outlined"> monitoring </span
            >Analytic</a
          >
        </li>
        <h4>
          <span>General</span>
          <div class="menu-separator"></div>
        </h4>
        <li>
          <a href="#"
            ><span class="material-symbols-outlined"> folder </span>
            <Link to="/addproduct">Add product</Link></a
          >
        </li>
        <li>
          <a href="#"
            ><span class="material-symbols-outlined"> groups </span>
            <Link to="/allusers">All users</Link>
            </a
          >
        </li>
        <li>
          <a href="#"
            ><span class="material-symbols-outlined"> move_up </span><Link to="/allorders">All orders</Link></a
          >
        </li>
        <li>
          <a href="#"
            ><span class="material-symbols-outlined"> flag </span>
            <Link to="/">Go to website</Link></a
          >
        </li>
        <li>
          <a href="#"
            ><span class="material-symbols-outlined">
              notifications_active </span
            >Notifications</a
          >
        </li>
        <h4>
          <span>Account</span>
          <div class="menu-separator"></div>
        </h4>
        <li>
          <a href="#"
            ><span class="material-symbols-outlined"> account_circle </span
            >Profile</a
          >
        </li>
        <li>
          <a href="#"
            ><span class="material-symbols-outlined"> settings </span
            >Settings</a
          >
        </li>
        <li>
          <a href="#"
            ><span class="material-symbols-outlined"> logout </span>Logout</a
          >
        </li>
      </ul>
      <div class="user-account">
        <div class="user-profile">
          <img src={`${user}`} alt="Profile Image" />
          <div class="user-detail">
            <h3>Nirmal kumar</h3>
            <span>Web developer</span>
          </div>
        </div>
      </div>
    </aside>
    </section>
        {/* <div className="main-admin">
            <div className="main-in">
                <ul>
                    <li><Link to="/addproduct">Add product</Link></li>
                    <li><Link to="/allproducts">All products</Link></li>
                    <li><Link to="/allusers">All users</Link></li>
                </ul>
            </div>
        </div> */}

        </>
    )
}

export{AdminHeader}