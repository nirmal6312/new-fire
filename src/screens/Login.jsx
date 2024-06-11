import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Login() {
  //signup
  const [remail, rsetEmail] = useState("");
  const [rpassword, rsetPassword] = useState("");
  const [username,setusername] = useState("")
  const [phone,setphone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://exciting-alabaster-rosehip.glitch.me/register",
      data: {
        remail,
        rpassword,
        username,
        phone
      },
    };

    axios(configuration)
      .then((result) => {
        toast.success("user signup successfulyyy.!");
      })
      .catch((error) => {
        error = new Error();
        toast.error("user not registered");
      });
  };

  //login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://exciting-alabaster-rosehip.glitch.me/login",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        cookies.set("TOKEN", result.data, {
          path: "/",
        });
        console.log(result.data)
        toast.success(result.data.message)
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        toast.error("user not found...");
      });
  };
  return (
    <>
      <Toaster />
      <section id="body">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form onSubmit={(e) => handleSubmit(e)}>
              <label for="chk" aria-hidden="true">
                Sign up
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="username..."
              />
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                placeholder="phone..."
              />
              <input
                type="text"
                name="email"
                value={remail}
                onChange={(e) => rsetEmail(e.target.value)}
                placeholder="Email..."
              />
              <input
                type="text"
                name="password"
                value={rpassword}
                onChange={(e) => rsetPassword(e.target.value)}
                placeholder="Password"
              />
              <button>Sign up</button>
            </form>
          </div>

          <div className="login">
            <form onSubmit={(e) => handleLogin(e)}>
              <label for="chk" aria-hidden="true">
                Login
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button>Login</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export { Login };
