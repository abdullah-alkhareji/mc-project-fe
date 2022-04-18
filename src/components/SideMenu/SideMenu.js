import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SideMenu.css";
import { IoHome } from "react-icons/io5";
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
      <div>
        <h1 className="side-menu__logo">{"<Evaluation>"}</h1>
        <div className="side-menu__menu">
          <NavLink to="/home" className="side-menu__menu-item">
            <IoHome size={24} />
            Home
          </NavLink>
          <NavLink to="/home/semesters" className="side-menu__menu-item">
            <IoHome size={24} />
            Home2
          </NavLink>
        </div>
      </div>
      <div className="side-menu__logout">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default SideMenu;
