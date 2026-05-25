import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { signInStart,signInFaluire,signInSuccess, } from "../../redux/user/userSlice";
import toast from "react-hot-toast"
import {useDispatch,useSelector } from "react-redux"

function LoginPage() {

  const navigate=useNavigate();
  const dispatch =useDispatch()
  const [Form, setForm] = useState({
    Email: "",
    Password: ""
  })
  const [showPassword, setShowPassword] = useState(false)
 const {loading,error}=useSelector((state)=>state.user)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      return {
        ...prev,
        [name]: value
      }

    })
  }
  const HandleSubmit= async(e)=>{
    e.preventDefault()
 try {
dispatch(signInStart())
  const res = await api.post("/auth/login",Form)
  const data=await res.json();
if(data.success===false){
 dispatch(signInFaluire(data.message)); 
  return;
}
dispatch(signInSuccess(data));
navigate('/')
console.log("data is submitted ")
toast.success("Account signing")


 } catch (error) {
  dispatch(signInFaluire(toast.error(message)))

 }
 
  }



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
          Welcome Back
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Login to continue your journey
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="Email"
              onChange={(e) => handleChange(e)}
              value={Form.Email}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/40 text-white 
                         border border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400
                         transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm text-gray-300 mb-1">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              onChange={(e) => handleChange(e)}
              value={Form.Password}
              name="Password"
              className="w-full px-4 py-3 pr-12 rounded-xl 
               bg-black/40 text-white 
               border border-gray-600 
               focus:outline-none focus:ring-2 focus:ring-cyan-400
               transition"
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

          {/* Button */}
          <button
            onSubmit={HandleSubmit}
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl 
                       bg-gradient-to-br from-cyan-400 to-blue-500
                       text-black font-semibold
                       hover:scale-105 hover:shadow-lg
                       transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-400 text-sm">
          Don’t have an account?
        </div>

        {/* Signup Link */}
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
