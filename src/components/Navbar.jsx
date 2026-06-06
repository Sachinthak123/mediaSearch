import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-blue-600">Media</span>
          <span className="text-black">Search</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <Link to="/" className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Search
          </Link>

          <Link to="/collectionPage" className="text-black px-5 py-2 rounded-lg border border-gray-300 font-medium hover:bg-gray-100 transition">
            Collections
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;