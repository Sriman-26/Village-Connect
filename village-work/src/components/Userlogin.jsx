import {Link} from "react-router-dom";
function Userlogin(){
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">
                    User Login
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email"
                        placeholder="Enter Your Email :"
                        className="mt-1 w-full px-3 py-2 border rounded-lg 
                        focus:outline-none 
                        focus:ring-2 
                        focus:ring-blue-400" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password"
                        placeholder="Enter Your password"
                        className="mt-1 w-full px-3 py-2 border rounded-lg 
                        focus:outline-none 
                        focus:ring-2 
                        focus:ring-blue-400" required />
                    </div>
                    <button type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                        Login
                    </button>
                    <p className="mt-4 text-center">Don't have an account
                        <Link to="/register" className="text-blue-600 underline hover:text-green"> Register here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
export default Userlogin;