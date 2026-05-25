import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import toast from "react-hot-toast";

function SignupPage() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    FullName: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.Password !== form.ConfirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/auth/registartion", {
        FullName: form.FullName,
        Email: form.Email,
        Password: form.Password
      });

      const data = res.data; 

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        toast.error(data.message);
        return;
      }

      setLoading(false);
      setError(null);
      toast.success("Account created! Please log in.");
      navigate("/login");

    } catch (error) {
      setLoading(false);
      const message = error?.response?.data?.message || "Signup failed";
      setError(message); 
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">

     
      <div className="w-full max-w-md p-8 rounded-2xl 
                      bg-white/10 backdrop-blur-xl 
                      border border-white/20 
                      shadow-2xl">

        
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Join us and start your journey
        </p>

      
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="FullName"
              value={form.FullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/40 text-white 
                         border border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400
                         transition"
              required
            />
          </div>

         
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="Email"
              value={form.Email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/40 text-white 
                         border border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400
                         transition"
              required
            />
          </div>

         
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="Password"
              value={form.Password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/40 text-white 
                         border border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400
                         transition"
              required
            />
          </div>

       
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="ConfirmPassword"
              value={form.ConfirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/40 text-white 
                         border border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400
                         transition"
              required
            />
          </div>

         
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3 rounded-xl 
                       bg-gradient-to-r from-cyan-400 to-blue-500
                       text-black font-semibold
                       hover:scale-105 hover:shadow-lg
                       transition duration-300
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        
        {error && (
          <p className="mt-3 text-center text-red-400 text-sm">{error}</p>
        )}

        
        <div className="my-6 text-center text-gray-400 text-sm">
          Already have an account?
        </div>

        
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
