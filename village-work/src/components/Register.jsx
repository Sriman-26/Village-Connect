import {Link} from "react-router-dom";
function Register(){
    return(
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="bg-pink-50 p-8 rounded-2xl shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                    Register
                </h2>
                <form >
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2">Full Name</label>
                        <input type="text"
                        placeholder="Enter Your name"
                        className="w-full px-3 py-2 border rounded-lg
                        focus:outline-none
                        focus:ring-2
                        focus:ring-green-400" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2">Email:</label>
                        <input type="email"
                        placeholder="Enter Your email:"
                        className="w-full px-3 py-2 border rounded-lg
                        focus:outline-none
                        focus:ring-2
                        focus:ring-green-400" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2">Password:</label>
                        <input type="password"
                        placeholder="Enter Your password"
                        className="w-full px-3 py-2 border rounded-lg
                        focus:outline-none
                        focus:ring-2
                        focus:ring-green-400" />
                    </div>
                    <button type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                        Register
                    </button>
                    <p className="mt-4 text-center">Already Have an Account 
                        <Link to="/userlogin" className="text-blue-600 underline hover:text-green"> Login Here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
export default Register;