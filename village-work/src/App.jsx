import React  from "react";
import "./App.jsx";
import {Routes,Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
function App(){
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/schemes" element={<Home />}></Route>
        <Route path="/requests" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}
export default App;