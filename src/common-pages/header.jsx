import React  from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

function Header() {

    const {totalUniqueItems} = useCart()
    return (
        <>
            <div className="main">
                <h5><i class="fa-solid fa-cart-shopping"></i> </h5>
                <h4>{totalUniqueItems}</h4>
                <ul>
                    <li><NavLink activeClassName="active" to="/home">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                    <li><NavLink activeClassName="active" to="/service">Service</NavLink></li>
                    <li><NavLink activeClassName="active" to="/cart">Cart</NavLink></li>
                    <li><NavLink activeClassName="active" to="/table">Table</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export { Header }