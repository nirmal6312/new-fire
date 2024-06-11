// import React, { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { Qauntity } from "./qauntity";
// import { useCart } from "react-use-cart";

// function Products() {
//   const { addItem, inCart } = useCart();

//   const product = [
//     {
//       id: 1,
//       productname: "Patato",
//       price: 200,
//       qauntityavailable: 7,
//     },
//     {
//       id: 2,
//       productname: "Onion",
//       price: 600,
//       qauntityavailable: 5,
//     },
//     {
//       id: 3,
//       productname: "Garlic",
//       price: 1000,
//       qauntityavailable: 9,
//     },
//   ];
//   const [searchproduct, setsearchproduct] = useState([...product]);

//   const filterprodcuts = (e) => {
//     const inputvalue = e.target.value;
//     const updatedproducts = searchproduct.filter((items) =>
//       items.productname.toLowerCase().startsWith(inputvalue)
//     );
//     if (inputvalue) {
//       setsearchproduct(updatedproducts);
//     } else {
//       setsearchproduct(product);
//     }
//   };

//   return (
//     <>
//       <Toaster />
//       {/* <div className="input">
//         <input
//           onChange={filterprodcuts}
//           type="text"
//           placeholder="search your product....."
//         />
//       </div> */}
//       <div
//         className="main"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {searchproduct.map((items) => {
//           return (
//             <>
//               <div
//                 className="bx"
//                 style={{
//                   border: "2px solid grey",
//                   backgroundColor: "black",
//                   color: "white",
//                   padding: "14px",
//                   margin: "10px",
//                   width: "28%",
//                   textAlign: "center",
//                 }}
//               >
//                 <h1>{items.productname}</h1>
//                 <h4>{items.price}</h4>
//                 <Qauntity
//                   available={items.qauntityavailable}
//                   qaunt={1}
//                   total={items.price}
//                 />
//                 <br />{" "}
//                 <button
//                   onClick={() => {
//                     addItem(items);
//                   }}
//                 >
//                   {inCart(items.id) ? "Go to cart" : "Add to cart"}
//                 </button>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export {Products};
