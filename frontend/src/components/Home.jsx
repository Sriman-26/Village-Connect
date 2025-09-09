import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Welcome to Village Connect
          </h1>

          {/* Subtitle / description */}
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10">
            Your one-stop platform to access government schemes, raise complaints, and stay updated about village activities.
          </p>

          {/* Quick action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
            {/* Go to Schemes */}
            <Link
              to="/schemes"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 hover:text-blue-900 transition"
            >
              View Schemes
            </Link>

            {/* Raise Complaint */}
            <Link
              to="/complaints"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 hover:text-blue-900 transition"
            >
              Raise a Complaint
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Highlights Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
            Key Features
          </h2>

          {/* Grid for features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-2 sm:px-0">
            {/* Feature 1 */}
            <div className="bg-blue-50 rounded-lg shadow p-8 text-center hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Government Schemes</h3>
              <p className="text-gray-700">
                Explore central and state government schemes with detailed eligibility, benefits, and application links.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-lg shadow p-8 text-center hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Raise Complaints</h3>
              <p className="text-gray-700">
                Report village issues or problems with schemes, upload images, and track your complaint status.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 rounded-lg shadow p-8 text-center hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Contact Authorities</h3>
              <p className="text-gray-700">
                Get in touch with village officials for guidance or support regarding schemes and local development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Info Section */}
      <section className="bg-blue-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            About Village Connect
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-blue-900 leading-relaxed">
            Village Connect aims to bridge the gap between government initiatives and villagers. From providing information on central and state schemes to enabling direct communication with authorities, it empowers citizens to actively participate in local development.
          </p>
          <Link
            to="/contact"
            className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
