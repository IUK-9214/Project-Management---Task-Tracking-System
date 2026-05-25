// src/components/layout/Navbar.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/axios";
import { useDispatch, useSelector } from "react-redux"; // ✅ connect to Redux
import { signOut } from "../redux/user/userSlice";      // ✅ import signOut action

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ FIX: Read actual user from Redux instead of hardcoding "Admin" / "A"
  const { currentuser } = useSelector((state) => state.user);
  const displayName = currentuser?.FullName || currentuser?.name || "User";
  const avatarLetter = displayName.charAt(0).toUpperCase();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");

      // ✅ FIX: Dispatch signOut to clear Redux + persisted state
      dispatch(signOut());

      // These are now redundant since Redux-Persist handles storage,
      // but kept for safety in case you also store a token separately
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      toast.success("Logged out successfully");
      navigate("/login");

    } catch (error) {
      console.error("Logout Error:", error?.response?.data?.message);
      toast.error("Logout failed");
    }
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full 
                 bg-black/40 backdrop-blur-xl 
                 border-b border-white/10 
                 px-6 py-3 
                 flex justify-between items-center 
                 shadow-lg"
    >

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold text-cyan-400"
      >
        Welcome, {displayName}
      </motion.h1>

      <div className="flex items-center gap-4">

    
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-9 h-9 rounded-full 
                     bg-cyan-400/20 text-cyan-400 
                     border border-cyan-400/30
                     flex items-center justify-center 
                     font-semibold cursor-pointer"
        >
          {avatarLetter}
        </motion.div>

        {/* Logout Button */}
        <motion.button
          onClick={handleLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-1 rounded-lg 
                     bg-gradient-to-r from-cyan-400 to-blue-500 
                     text-black font-medium
                     hover:shadow-lg transition"
        >
          Logout
        </motion.button>

      </div>
    </motion.div>
  );
}

export default Navbar;
