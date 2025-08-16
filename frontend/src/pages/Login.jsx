// Login.jsx
import React, { useState } from "react";
import axios from "axios";
import "../customcss/Login.css";
import { Link, useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL; // ✅ Correct for Vite

function Login() {
  const [active, setActive] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // 🔹 Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/login`, {
        email,
        password,
      });

      console.log("Login Success:", res.data);

      // ✅ Save token in localStorage
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");

      // ✅ Check role from res.data
      if (res.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Login failed!");
    }
  };

  // 🔹 Signup handler
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/register`, {
        name,
        email,
        password,
      });

      console.log("Signup Success:", res.data);
      alert("Signup successful! Now login.");
      setActive("login"); // ✅ switch to login form
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Signup failed!");
    }
  };

  return (
    <section className="user">
      <div className="user_options-container">
        {/* Left / Right Info Panels */}
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">Don't have an account?</h2>
            <p className="user_unregistered-text">
              Sign up to explore our collections and enjoy shopping!
            </p>
            <button
              className="user_unregistered-signup"
              onClick={() => setActive("signup")}
            >
              Sign up
            </button>
          </div>

          <div className="user_options-registered">
            <h2 className="user_registered-title">Have an account?</h2>
            <p className="user_registered-text">
              Log in to continue your shopping experience.
            </p>
            <button
              className="user_registered-login"
              onClick={() => setActive("login")}
            >
              Login
            </button>
          </div>
        </div>

        {/* Forms */}
        <div
          className={`user_options-forms ${
            active === "signup" ? "bounceLeft" : "bounceRight"
          }`}
        >
          {/* Login Form */}
          <div
            className={`user_forms-login ${
              active === "login" ? "showForm" : ""
            }`}
          >
            <h2 className="forms_title">Login</h2>
            <form className="forms_form" onSubmit={handleLogin}>
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="forms_field-input"
                    required
                  />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <button type="button" className="forms_buttons-forgot">
                  Forgot password?
                </button>
                <input
                  type="submit"
                  value="Log In"
                  className="forms_buttons-action"
                />
              </div>
            </form>
          </div>

          {/* Signup Form */}
          <div
            className={`user_forms-signup ${
              active === "signup" ? "showForm" : ""
            }`}
          >
            <h2 className="forms_title">Sign Up</h2>
            <form className="forms_form" onSubmit={handleSignup}>
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Full Name"
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="forms_field-input"
                    required
                  />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <input
                  type="submit"
                  value="Sign up"
                  className="forms_buttons-action"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
