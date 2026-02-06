import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function SideBar() {
  const baseClasses =
    "block py-2 px-4 rounded-lg transition relative overflow-hidden";

  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-64 
                 bg-black/60 backdrop-blur-xl 
                 border-r border-white/10 
                 min-h-screen p-6 
                 hidden md:block 
                 shadow-2xl"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold text-cyan-400 mb-8"
      >
        Admin Panel
      </motion.h2>

      <nav className="flex flex-col gap-2">
        {[
          { to: "/", label: "Home" },
          { to: "admindashboard", label: "Dashboard" },
          { to: "adminprojects", label: "Projects" },
          { to: "admintasks", label: "Tasks" },
          { to: "adminusers", label: "Users" },
        ].map((item, index) => (
          <motion.div
            key={item.to}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
          >
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `${baseClasses} ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-400 font-semibold"
                    : "text-gray-300 hover:bg-white/10"
                }`
              }
            >
              {item.label}

              {/* Active Indicator Bar */}
              <motion.span
                layout
                className="absolute left-0 top-0 h-full w-1 
                           bg-gradient-to-b from-cyan-400 to-blue-500 
                           rounded-r"
                style={{ opacity: 1 }}
              />
            </NavLink>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
}

export default SideBar;
