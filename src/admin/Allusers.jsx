import React, { useEffect, useState } from "react";

function Allusers() {
  const [data, setdata] = useState([]);

  const alldataa = async () => {
    const res = await fetch("https://exciting-alabaster-rosehip.glitch.me/allusers", {
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
        <h1 style={{color:"white"}}>List of all Users....</h1>
        <table>
          <tr>
            <th>User Name</th>
            <th>User phone </th>
            <th>User email</th>
            <th>Edit user</th>
            <th>Delete user</th>
            <th>User status</th>
          </tr>
        
        {data.map((items, index) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(items?.img?.data?.data))
          );
          return (
            <>
              <tr>
                <td>{items.username}</td>
                <td>{items.phone}</td>
                <td>{items.email}</td>
                <td className="edit">
                  <button><i class="fa-solid fa-pen-to-square"></i></button>
                </td>
                <td className="del">
                  <button><i class="fa-solid fa-trash"></i></button>
                </td>
                <td>Online</td>
                
              </tr>
              
            </>
          );
        })}
        </table>
      </div>
    </>
  );
}

export { Allusers };
