import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "react-toastify/dist/ReactToastify.css";
import "./Register.scss";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User Registered Successfully!", {
        position: "top-center",
        onClose: () => {
          navigate("/login");
        },
      });
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h3 className="register-title">Sign Up</h3>

        <div className="input-group">
          <label>First name</label>
          <input
            type="text"
            className="form-input"
            placeholder="First name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-input"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Sign Up
        </button>

        <p className="login-link">
          Already registered? <a href="/login">Login</a>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
