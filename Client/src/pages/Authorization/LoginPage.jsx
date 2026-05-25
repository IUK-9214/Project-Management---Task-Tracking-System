import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { signInStart, signInFaluire, signInSuccess } from "../../redux/user/userSlice";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Form, setForm] = useState({
    Email: "",
    Password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await api.post("/auth/login", Form);
      const data = res.data; // ✅ axios uses res.data, not res.json()

      if (data.success === false) {
        dispatch(signInFaluire(data.message));
        toast.error(data.message);
        return;
      }

      dispatch(signInSuccess(data));
      toast.success("Signed in successfully");
      navigate("/");
    } catch (error) {
      const message = error?.response?.data?.message || "Login failed";
      dispatch(signInFaluire(message)); 
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">

      
      <div className="w-full max-w-md p-8 rounded-2xl 
                      bg-white/10 backdrop-blur-xl 
                      border border-white/20 
                      shadow-2xl
                      animate-fadeIn">

        
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Login to continue your journey
        </p>

        
        <form onSubmit={HandleSubmit} className="space-y-5">

         
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="Email"
              onChange={handleChange}
              value={Form.Email}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/40 text-white 
                         border border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400
                         transition"
              required
            />
          </div>

          
          <div className="relative">
            <label className="block text-sm text-gray-300 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              onChange={handleChange}
              value={Form.Password}
              name="Password"
              className="w-full px-4 py-3 pr-12 rounded-xl 
                         bg-black/40 text-white 
                         border border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400
                         transition"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] 
                         text-gray-400 hover:text-white"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl 
                       bg-gradient-to-br from-cyan-400 to-blue-500
                       text-black font-semibold
                       hover:scale-105 hover:shadow-lg
                       transition duration-300
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        
        {error && (
          <p className="mt-3 text-center text-red-400 text-sm">{error}</p>
        )}

        <div className="my-6 text-center text-gray-400 text-sm">
          Don't have an account?
        </div>

     
        <Link
          to="/signup"
          className="block text-center text-cyan-400 hover:text-cyan-300 transition"
        >
          Create a new account →
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
