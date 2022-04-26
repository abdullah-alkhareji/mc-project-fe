import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import TeamDetails from "../TeamDetails/TeamDetails";
import SemesterList from "../SemesterList/SemesterList";
import SideMenu from "../SideMenu/SideMenu";
import "./Home.css";
import authStore from "../../stores/authStore";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    !authStore.user && navigate("/auth/login");
  }, [authStore.user]);

  return (
    <div className="home">
      <div className="home__side-menu">
        <SideMenu />
      </div>
      <div className="home__playground container">
        <Routes>
          <Route path="" element={<SemesterList />} />
          <Route path="/details/:projectId" element={<TeamDetails />} />
          <Route path="/details/:projectId/:teamId" element={<TeamDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
