import React from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../../stores/authStore";
import Login from "../Auth/Login";

const Home = () => {
  console.log(authStore.user);
  const navigate = useNavigate();
  if (!authStore.user) navigate("/login");
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
