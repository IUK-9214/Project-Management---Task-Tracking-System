// src/components/layout/Navbar.jsx

import { motion } from "framer-motion";

function Navbar() {
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
      {/* Left: Title */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold text-cyan-400"
      >
        Welcome, Admin
      </motion.h1>

      {/* Right: Profile + Logout */}
      <div className="flex items-center gap-4">
        
        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-9 h-9 rounded-full 
                     bg-cyan-400/20 text-cyan-400 
                     border border-cyan-400/30
                     flex items-center justify-center 
                     font-semibold cursor-pointer"
        >
          A
        </motion.div>

        {/* Logout Button */}
        <motion.button
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
