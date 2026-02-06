import React from "react";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      
      {/* Glass Card */}
      <div className="w-full max-w-md p-8 rounded-2xl 
                      bg-white/10 backdrop-blur-xl 
                      border border-white/20 
                      shadow-2xl
                      animate-fadeIn">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Join us and start your journey
        </p>

        {/* Form */}
        <form className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/40 text-white 
                         border border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400
                         transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/40 text-white 
                         border border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400
                         transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/40 text-white 
                         border border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400
                         transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/40 text-white 
                         border border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400
                         transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-2 py-3 rounded-xl 
                       bg-gradient-to-r from-cyan-400 to-blue-500
                       text-black font-semibold
                       hover:scale-105 hover:shadow-lg
                       transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-400 text-sm">
          Already have an account?
        </div>

        {/* Login Link */}
        <Link
          to="/login"
          className="block text-center text-cyan-400 hover:text-cyan-300 transition"
        >
          Login instead →
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;
