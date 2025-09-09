import React  from "react";
import "./App.jsx";
import {Routes,Route} from "react-router-dom";
import Userlogin from "./components/Userlogin.jsx";
import Adminlogin from "./components/Adminlogin.jsx";
import Register from "./components/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Schemes from "./components/Schemes.jsx";
import Requests from "./components/Requests.jsx";
function App(){
  return(
    <div>
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/schemes" element={<Schemes />}></Route>
          <Route path="/requests" element={<Requests />}></Route>
          <Route path="/userlogin" element={<Userlogin />}></Route>
          <Route path="/Adminlogin" element={<Adminlogin />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;