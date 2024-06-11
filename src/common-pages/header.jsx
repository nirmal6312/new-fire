import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const Header = () => {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  const updatetoken = token?.token;
  const logout = () => {
    cookies.remove("TOKEN", { path: "/" });
    window.location.href = "/";
  };

  return (
    <>
    <div className="main-header">
      <div className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/admin ">Admin</Link></li> */}
        </ul>

      </div>
      <div className="user-info">
      {updatetoken ? (
        <>
          <h4>Welcome {token.email}</h4>
          <button onClick={logout}>Logout <i class="fa-solid fa-right-from-bracket"></i></button>
        </>
      ) : (
        <>
          <h4>
            <Link to="/">Login</Link>
          </h4>
        </>
      )}
      </div>
    </div>
      
    </>
  );
};

export default Header;
