import React from "react";
import { centralSchemes, apSchemes } from "../Data/Schemedata";

export default function SchemesPage() {
  return (
    <div className="bg-gray-100 min-h-screen px-2 py-6 sm:px-4 sm:py-8 md:px-10 md:py-12">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8 underline">
        Schemes
      </h1>

      {/* Central Government Schemes */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-blue-700 text-center underline">
          Central Government Schemes
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {centralSchemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col justify-between"
            >
              <h3 className="text-lg font-bold text-blue-700 mb-2">{scheme.name}</h3>
              <p className="text-xs text-gray-500 mb-1">Launched: {scheme.launchYear}</p>
              <p className="text-gray-700 mb-2">{scheme.description}</p>
              <p className="text-xs mb-1"><span className="font-semibold">Eligibility:</span> {scheme.eligibility}</p>
              <p className="text-xs mb-2"><span className="font-semibold">Benefits:</span> {scheme.benefits}</p>
              <a
                href={scheme.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mt-auto bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-green-700 transition"
              >
                Apply Here
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* AP Government Schemes */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-700 text-center underline">
          Andhra Pradesh Government Schemes
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {apSchemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col justify-between"
            >
              <h3 className="text-lg font-bold text-green-700 mb-2">{scheme.name}</h3>
              <p className="text-xs text-gray-500 mb-1">Launched: {scheme.launchYear}</p>
              <p className="text-gray-700 mb-2">{scheme.description}</p>
              <p className="text-xs mb-1"><span className="font-semibold">Eligibility:</span> {scheme.eligibility}</p>
              <p className="text-xs mb-2"><span className="font-semibold">Benefits:</span> {scheme.benefits}</p>
              <a
                href={scheme.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mt-auto bg-green-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 hover:bg-blue-700 transition"
              >
                Apply Here
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
