import { Link } from "react-router-dom";

function Register() {
  // Handler for form submission with popup and redirect
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You are successfully registered!");
    // Redirect after alert; replace with your actual login path if different
    window.location.href = "/userlogin";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-pink-50 p-6 sm:p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your name"
              className="w-full px-3 py-2 border rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your email:"
              className="w-full px-3 py-2 border rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your password"
              className="w-full px-3 py-2 border rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
          <p className="mt-4 text-center">
            Already Have an Account{" "}
            <Link
              to="/userlogin"
              className="text-blue-600 underline hover:text-green-600"
            >
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
