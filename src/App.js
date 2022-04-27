import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import EvalName from "./components/Evaluation/EvalName/EvalName";
import EvalPage from "./components/Evaluation/EvalPage/EvalPage";
import EvalThanks from "./components/Evaluation/EvalThanks/EvalThanks";
import Evaluation from "./components/Evaluation/Evaluation";
import Home from "./components/Home/Home";
import TeamDetails from "./components/TeamDetails/TeamDetails";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Home />}>
        <Route path="/details/:projectId" element={<TeamDetails />} />
        <Route path="/details/:projectId/:teamId" element={<TeamDetails />} />
      </Route>
      <Route path="/auth" element={<Auth />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
      <Route path="/evaluation/" element={<Evaluation />}>
        <Route path=":evalId" element={<EvalName />} />
        <Route path=":evalId/:judgeId" element={<EvalPage />} />
        <Route path="thanks" element={<EvalThanks />} />
      </Route>
    </Routes>
  );
};

export default App;
