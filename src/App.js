import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import authStore from "./stores/authStore";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    !authStore.user && navigate("/login");
  }, [authStore.user]);

  return authStore.user ? <Home /> : <Auth />;
};

export default App;
