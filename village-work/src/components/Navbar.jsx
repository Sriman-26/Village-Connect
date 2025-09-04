import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
function Navbar(){
    return(
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-left">
            Village Connect
            </h2>
            <div className="flex space-x-6">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/schemes">Schemes</NavLink>
                <NavLink to="/requests">Requests</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;