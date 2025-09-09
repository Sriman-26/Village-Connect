import React, { useState } from "react";

export default function Requests() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    villageName: "",
    villageCode: "",
    phone: "",
    category: "",
    description: "",
    image: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Data:", formData);
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-8 sm:px-6 md:px-12 lg:px-20">
      <div className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
          Raise a Complaint
        </h2>

        {submitted ? (
          <p className="text-green-600 text-center font-semibold text-lg">
            ✅ Complaint submitted successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block font-medium mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-3 text-base placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-3 text-base placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="example@mail.com"
              />
            </div>

            {/* Village Name & Code */}
            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="flex-1">
                <label className="block font-medium mb-2" htmlFor="villageName">
                  Village Name
                </label>
                <input
                  type="text"
                  id="villageName"
                  name="villageName"
                  value={formData.villageName}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-3 py-3 text-base placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter village name"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:w-40">
                <label className="block font-medium mb-2" htmlFor="villageCode">
                  Village Code
                </label>
                <input
                  type="text"
                  id="villageCode"
                  name="villageCode"
                  value={formData.villageCode}
                  onChange={handleChange}
                  required
                  maxLength={6}
                  className="w-full border rounded-md px-3 py-3 text-base placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Code"
                />
              </div>
            </div>
            {/* Phone Number */}
            <div>
                <label className="block font-medium mb-2" htmlFor="phone">
                    Phone Number
                </label>
                <div className="flex items-center space-x-2">
                    <span className="px-3 py-3 bg-gray-200 rounded-l-md select-none text-gray-700">
                    +91
                    </span>
                    <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onInput={(e) => {
                        // Remove any non-digit characters on input
                        e.target.value = e.target.value.replace(/\D/g, "");
                    }}
                    placeholder="Enter your 10-digit mobile number"
                    pattern="^\d{10}$"
                    title="Enter a 10-digit mobile number"
                    maxLength={10}
                    required
                    className="flex-grow border rounded-r-md px-3 py-3 text-base placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>
            </div>
            {/* Category */}
            <div>
              <label className="block font-medium mb-2" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-3 text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="">-- Select Category --</option>
                <option value="Water Supply">Water Supply</option>
                <option value="Electricity">Electricity</option>
                <option value="Roads">Roads</option>
                <option value="Schemes">Schemes</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border rounded-md px-3 py-3 text-base placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                placeholder="Describe your issue"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block font-medium mb-2" htmlFor="image">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                required
                className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                           file:rounded-md file:border-0
                           file:text-sm file:font-semibold
                           file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
                           cursor-pointer transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md
                         hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400
                         transition"
            >
              Submit Complaint
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
