import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Evaluation from "../Evaluation/Evaluation";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  // const navigate = useNavigate();
  // // navigate("/auth/login");
  // return;
  //   <>
  //     <Login />
  //   </>
  // );
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Auth;
