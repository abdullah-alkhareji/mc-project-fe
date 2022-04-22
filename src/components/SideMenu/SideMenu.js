import React from "react";
import { useNavigate } from "react-router-dom";
import "./SideMenu.css";
import Button from "../Button";
import authStore from "../../stores/authStore";

const SideMenu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    authStore.logout();
    navigate("/login");
  };
  return (
    <div className="side-menu">
      <h2 className="side-menu__logo">{"<Admin Page>"}</h2>

      <div className="side-menu__logout">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default SideMenu;
