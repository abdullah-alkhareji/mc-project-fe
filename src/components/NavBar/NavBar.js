import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import Button from "../Button";
import authStore from "../../stores/authStore";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    authStore.logout();
    navigate("auth/login");
  };
  return (
    <div className="nav-bar">
      <h2 className="nav-bar__logo">{"<Evaluation>"}</h2>

      <div className="nav-bar__logout">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default NavBar;
