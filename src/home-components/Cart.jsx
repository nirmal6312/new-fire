import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Cart(){

    const {items,removeItem,isEmpty,updateItemQuantity,cartTotal} = useCart()

    if(isEmpty){
        return(
            <>
            <h2>CART IS EMPTY</h2>
            <Link to="/home">Go to shop</Link>
            </>
        )
    }

    const checkout=()=>{
        toast.success("you sucessfully purchased....")
       setTimeout(() => {
        localStorage.clear();
       }, 2000);
       setTimeout(() => {
        window.location.reload()
       }, 3000);
    }
    return(
        <>
        <Toaster/>
        <h1>This is cart</h1>
        <div className="main-wrapper">
            {
                items.map((cartitems)=>{
                    if(cartitems.quantity>=10){
                        return(
                            <>
                            <h1>this item is out of stock</h1>
                            <button onClick={()=>{removeItem(cartitems.id)}}>Delete</button>
                            </>
                        )
                    }
                    return(
                        <>
                        <h1>{cartitems.productname}</h1>
                        <h1>{cartitems.price * cartitems.quantity}</h1>
                        <button onClick={()=>{updateItemQuantity(cartitems.id,cartitems.quantity+1)}}>+</button>
                        <span>{cartitems.quantity}</span>
                        <button onClick={()=>{updateItemQuantity(cartitems.id,cartitems.quantity-1)}}>-</button>
                        <button onClick={()=>{removeItem(cartitems.id)}}>Delete</button>
                        </>
                    )
                })
            }
            <h4>Total price is : {cartTotal}</h4>
        </div>
        <button onClick={checkout}>Checkout</button>
        </>
    )
}

export{Cart}