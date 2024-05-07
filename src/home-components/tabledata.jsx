import React, { useState } from "react";

function Tableusers() {
  const [age, setage] = useState();

  const updateage = (e) => {
    setage(e.target.value);
  };

  const [data, setdata] = useState([]);

  localStorage.setItem("myusers", age);

  const mydata = localStorage.getItem("myusers");
  console.log(mydata);

  const addusers = (e) => {
    e.preventDefault();
    setdata(age);
  };
  return (
    <>
      <form>
        <input
          onChange={updateage}
          type="number"
          placeholder="enter your age.."
        />
        <button onClick={addusers}>Add user</button>
      </form>

      <table border="3px">
        <tr>
          <th>Age</th>
        </tr>
        <tr>
          <td>{data}</td>
        </tr>
      </table>
    </>
  );
}

export { Tableusers };
