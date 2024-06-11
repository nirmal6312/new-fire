import React, { useEffect, useState } from "react";
import {  useCart } from "react-use-cart";
function Products() {
  const [data, setdata] = useState([]);

  const alldataa = async () => {
    const res = await fetch("http://localhost:4000/getproduct", {
      method: "GET",
    });
    const updateddata = await res.json();
    res? setdata(updateddata) : alert("check your internet");
    console.log(updateddata);
  };

  useEffect(() => {
    alldataa();
  }, []);


  const { addItem } = useCart();

  return (
    <>
      <div class="card-list">
        {data.map((item,index) => {

const base64String = btoa(
    String.fromCharCode(...new Uint8Array(item?.img?.data?.data))
  );
          return (
            <>
              <a key={item.id} href="#" class="card-item">
                <img src={`data:image/;base64,${base64String}`} alt="Card Image" />
                <span class="developer">{item.pname}</span>
                <h3>{item.description}.</h3>
                <h3>{item.price}</h3>
                <div className="cart-details">
                <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
                </div>
                <div className="cart">
                <button onClick={() => addItem(item)}>Add to Cart</button>
                </div>
                </div>
              </a>
            </>
          );
        })}
      </div>
    </>
  );
}

export { Products };
