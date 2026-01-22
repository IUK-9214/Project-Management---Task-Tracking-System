// src/components/layout/Navbar.jsx

import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center shadow-sm"
    >
      {/* Left: Title */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold text-indigo-600"
      >
        Welcome, Admin
      </motion.h1>

      {/* Right: Profile + Logout */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold cursor-pointer"
        >
          A
        </motion.div>

        {/* Logout Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition"
        >
          Logout
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Navbar;
