import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../../Slices/loginPage/loginSlice";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password })).then((action) => {
      if (login.fulfilled.match(action)) {
        toast.success("You are logged in!");
        setTimeout(() => {
          navigate("/documents");
        }, 1500);
      } else if (login.rejected.match(action)) {
        toast.error(action.payload);
      }
    });
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <form className="login-form" onSubmit={handleLogin}>
        <h3 className="login-title">Login</h3>

        <div className="input-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? "Logging in" : "Submit"}
        </button>

        <p className="forgot-password">
          New user <a href="/register">Register Here</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
