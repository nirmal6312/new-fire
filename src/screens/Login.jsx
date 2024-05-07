import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const path = useNavigate();

  //for update username with state
  const [username, setusername] = useState("");
  //for update password with state
  const [password, setpassword] = useState("");

  //to use get value of username
  const uservalue = (e) => {
    setusername(e.target.value);
  };
  // to use get value from password
  const passwordvalue = (e) => {
    setpassword(e.target.value);
  };

  //for submit the form and check user is and not
  const handlesubmit = (e) => {
    e.preventDefault();
    if (username === "n@gmail.com" && password == 12345) {
      toast.success("Login sucessfullyy....");
      setTimeout(() => {
        path("/home");
      }, 20);
    } else {
      toast.error("User not found...");
    }
  };

  return (
    <>
      <Toaster />
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                />
                {/* <i className="bx-hide eye-icon"></i> */}
              </div>
              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>
              <div className="field button-field">
                <button>Login</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <a href="#" className="link signup-link">
                  Signup
                </a>
              </span>
            </div>
          </div>
          
        </div>

        <div className="form signup">
          <div className="form-content">
            <header>Signup</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Create password"
                  className="password"
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="password"
                />
              </div>
              <div className="field button-field">
                <button>Signup</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Already have an account?{" "}
                <a href="#" className="link login-link">
                  Login
                </a>
              </span>
            </div>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <a href="#" className="field facebook">
              <i className="bx bxl-facebook facebook-icon"></i>
              <span>Login with Facebook</span>
            </a>
          </div>
          <div className="media-options">
            <a href="#" className="field google">
              <img src="#" alt="" className="google-img" />
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export { Login };
