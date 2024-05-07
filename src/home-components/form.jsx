import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  const [name, setname] = useState("");
  const [msg, setmsg] = useState("");

  const namevalue = (e) => {
    setname(e.target.value);
  };

  const checkuser = (e) => {
    e.preventDefault();
    if (name === "nirmal") {
      toast.success("user is found...");
    } else {
      toast.error("user not found....");
      setmsg("your name is wrong...");
    }
  };
  return (
    <>
      <Toaster />
      <form>
        <input
          onChange={namevalue}
          type="text"
          placeholder="Enter your name...."
        />
        <button onClick={checkuser}>Submit</button>
      </form>
      <p style={{ color: "red" }}>{msg}</p>
    </>
  );
}
export { Form };
