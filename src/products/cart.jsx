import React  from "react";
import {  useCart } from "react-use-cart";
function Cart(){
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
      } = useCart();
    return(
        <>
        {
            items.map((data)=>{
                return(
                    <>
                    <img src={data?.img?.data?.data}/>
                    <h1>{data.price}</h1>
                    <h4>{cartTotal}</h4>
                    <button onClick={()=>{removeItem(data.id)}}>Remove</button>

                    </>
                )
            })
        }
        
        
        </>
    )
}


export{Cart}