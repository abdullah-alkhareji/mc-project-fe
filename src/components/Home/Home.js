import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import authStore from "../../stores/authStore";
import AddProject from "../AddProject/AddProject";
import SemesterList from "../SemesterList/SemesterList";
import SideMenu from "../SideMenu/SideMenu";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__side-menu">
        <SideMenu />
      </div>
      <div className="home__playground container">
        <SemesterList />
      </div>
    </div>
  );
};

export default Home;
