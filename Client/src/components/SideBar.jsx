import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function SideBar() {
  const baseClasses =
    "block py-2 px-4 rounded transition relative overflow-hidden";

  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-64 bg-white border-r border-gray-200 min-h-screen p-6 hidden md:block"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold text-indigo-600 mb-6"
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
                    ? "bg-indigo-50 text-indigo-700 font-semibold"
                    : "text-gray-700 hover:bg-indigo-50"
                }`
              }
            >
              {item.label}

              {/* Active Indicator Bar */}
              <motion.span
                layout
                className="absolute left-0 top-0 h-full w-1 bg-indigo-600 rounded-r"
                style={{ opacity: 0 }}
              />
            </NavLink>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
}

export default SideBar;
