import { Route, Routes } from "react-router-dom";
import { LandingUser } from "./user/pages/Landing";
import { LoginUser } from "./user/pages/Login";
import { RegisterUser } from "./user/pages/Register";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingUser />}></Route>
        <Route path="/user" element={<LoginUser />}></Route>
        <Route path="/register-user" element={<RegisterUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
