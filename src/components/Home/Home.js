import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import authStore from "../../stores/authStore";
import SemesterList from "../SemesterList/SemesterList";
import SideMenu from "../SideMenu/SideMenu";
import "./Home.css";

const Home = () => {
  console.log(authStore.user);
  const navigate = useNavigate();

  useEffect(() => {
    !authStore.user && navigate("/login");
  }, [authStore.user]);

  return (
    <div className="home">
      <div className="home__side-menu">
        <SideMenu />
      </div>
      <div className="home__playground">
        <Routes>
          <Route path="/" element={<SemesterList />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
