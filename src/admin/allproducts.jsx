import React, { useEffect, useState } from "react";

function Allproducts() {
  const [data, setdata] = useState([]);

  const alldataa = async () => {
    const res = await fetch("https://exciting-alabaster-rosehip.glitch.me/getproduct", {
      method: "GET",
    });
    const updateddata = await res.json();
    setdata(updateddata);
    console.log(updateddata);
  };

  useEffect(() => {
    alldataa();
  }, []);

  return (
    <>
      <div className="main-product">
        <h1 style={{color:"white"}}>List of all products....</h1>
        <table>
          <tr>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product price</th>
            <th>Product image</th>
            <th>Delete product</th>
            <th>Edit product</th>
          </tr>
        
        {data.map((items, index) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(items?.img?.data?.data))
          );
          return (
            <>
              <tr>
                <td>{items.pname}</td>
                <td>{items.description}</td>
                <td>{items.price}</td>
                <td>
                  <img src={`data:image/;base64,${base64String}`} />
                </td>
                <td className="del">
                  <button><i class="fa-solid fa-trash"></i></button>
                </td>
                <td className="edit">
                  <button><i class="fa-solid fa-pen-to-square"></i></button>
                </td>
              </tr>
              
            </>
          );
        })}
        </table>
      </div>
    </>
  );
}

export { Allproducts };
