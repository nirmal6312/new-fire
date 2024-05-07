import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Qauntity(props) {
  //qauntity and price update=>
  const [qauntity, setqauantity] = useState(props.qaunt);

  const increase = () => {
    if (qauntity >= props.available) {
      toast.error("You add maximum products....");
    } else {
      setqauantity(qauntity + 1);
    }
  };
  const decrease = () => {
    if (qauntity <= 1) {
      toast.error("You must add 1 product...");
    } else {
      setqauantity(qauntity - 1);
    }
  };
  return (
    <>
      <button onClick={increase}>+</button>
      <span>{qauntity}</span>
      <span>total price: {props.total * qauntity}</span>
      <button onClick={decrease}>-</button>
    </>
  );
}

export { Qauntity };
