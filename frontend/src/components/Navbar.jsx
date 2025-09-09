import {useState} from "react";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
function Navbar(){
    const [showDropdown,setShowDropdown]=useState(false);
    return(
        <nav className="bg-indigo-900 text-white p-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-left">
            Village Connect
            </Link>
            <div className="flex space-x-6">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/schemes">Schemes</NavLink>
                <NavLink to="/requests">Requests</NavLink>
                <div className="relative">
                    <button onClick={()=>setShowDropdown(!showDropdown)}
                        className="hover:text-yellow-400">
                            Login
                    </button>
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md">
                            <Link to="/userlogin" className="block px-4 py-2 hover:bg-gray-300">
                            User Login
                            </Link>
                            <Link to="/adminlogin" className="block px-4 py-2 hover:bg-gray-400">
                            Admin Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
export default Navbar;