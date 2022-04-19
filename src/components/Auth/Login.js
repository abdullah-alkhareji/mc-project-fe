import React, { useEffect, useState } from "react";
import "./auth.css";
import svg from "../../assets/svg/svg-login.svg";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import authStore from "../../stores/authStore";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    authStore.user ? navigate("/") : console.log("not user");
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.login(user, navigate);
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="auth">
      <div className="auth__left">
        <div className="auth__left-header">
          <h3 className="auth__left-title">New User ?</h3>
          <p className="auth__left-paragraph">
            Join our family by clicking the button below and enjoy evaluating
          </p>
          <Button onClick={handleRegister}>Register</Button>
        </div>
        <img src={svg} alt="svg" className="auth__left-img" />
      </div>
      <div className="auth__right">
        <h1 className="auth__right-card-title">Login</h1>
        <br />
        <form onSubmit={handleSubmit} className="auth__right-form-group">
          <div className="auth__right-form-item">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              required
              className="ak-input"
            />
          </div>
          <div className="auth__right-form-item">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
              className="ak-input"
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
