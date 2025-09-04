import React from "react";
import "./App.jsx";
import {Routes,Route,Link} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register.jsx";
function App(){
  return(
    <div>
      <nav className="p-4 bg-gray-800 text-white flex gap-4 align-left">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1 className="p-6 text-xl">Welcome Home</h1>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}
export default App;