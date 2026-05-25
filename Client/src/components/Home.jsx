// src/Components/Home.jsx

import { Link, useNavigate } from "react-router-dom";
import { Home as HomeIcon, Users, ShieldCheck } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../redux/user/userSlice";
import api from "../api/axios";
import toast from "react-hot-toast";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentuser } = useSelector((state) => state.user);
  const isAdmin = currentuser?.role === "admin" || currentuser?.isAdmin === true;
  const isLoggedIn = !!currentuser;
  const displayName = currentuser?.FullName || currentuser?.name || "User";


  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      dispatch(signOut());
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

   
      {isLoggedIn && (
        <aside className="w-64 bg-black/60 backdrop-blur-xl border-r border-white/10 flex flex-col shadow-2xl">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold tracking-wide text-white">Task Manager</h2>
            <p className="text-sm text-gray-400 mt-1">
              {isAdmin ? "Admin Dashboard" : "User Dashboard"}
            </p>
          </div>

          <nav className="flex flex-col gap-2 p-4">
            <Link to="/" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition">
              <HomeIcon size={20} /> Home
            </Link>

           
            {isAdmin && (
              <Link to="/admindashboard" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition">
                <ShieldCheck size={20} /> Admin
              </Link>
            )}

            
            {!isAdmin && (
              <Link to="/user" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition">
                <Users size={20} /> My Dashboard
              </Link>
            )}
          </nav>
        </aside>
      )}

     
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className="h-16 bg-black/40 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-cyan-400">Home</h1>

        
          {!isLoggedIn && (
            <div className="flex gap-3">
              <Link to="/login" className="px-4 py-2 text-cyan-400 border border-cyan-400/40 rounded-lg hover:bg-cyan-400/10 transition">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-lg hover:scale-105 transition">
                Sign Up
              </Link>
            </div>
          )}

         
          {isLoggedIn && (
            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm">
                Hello, <span className="text-cyan-400 font-semibold">{displayName}</span>
              </span>

              
              {isAdmin ? (
                <Link to="/admindashboard" className="px-4 py-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-lg text-sm font-medium hover:scale-105 transition">
                  Admin Panel
                </Link>
              ) : (
                <Link to="/user" className="px-4 py-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-lg text-sm font-medium hover:scale-105 transition">
                  My Dashboard
                </Link>
              )}

              
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 rounded-lg border border-red-400/40 text-red-400 hover:bg-red-400/10 text-sm transition"
              >
                Logout
              </button>
            </div>
          )}
        </header>

       
        <main className="p-8 space-y-6 animate-fadeIn">
          <div>
            <h2 className="text-3xl font-bold text-white">
              {isLoggedIn ? `Welcome back, ${displayName} 👋` : "Welcome 👋"}
            </h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              A full-stack Project Management & Task Tracking System designed to manage
              projects, tasks, and users efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-xl shadow-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">📌 Projects</h3>
              <p className="text-gray-400 text-sm">Create, update, and manage multiple projects with structured task assignments and progress tracking.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-xl shadow-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">✅ Tasks</h3>
              <p className="text-gray-400 text-sm">Full CRUD operations on tasks with status tracking (To Do, In Progress, Completed).</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-xl shadow-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">👥 Users & Roles</h3>
              <p className="text-gray-400 text-sm">Manage users with role-based access: Admin, Project Manager, and Developer.</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-xl shadow-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">⚙️ Technology Stack</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Built using <b>React</b> for the frontend, <b>Node.js & Express</b> for backend APIs,
              <b> MongoDB</b> for database management, styled with <b>Tailwind CSS</b>,
              and routing via <b>React Router</b>.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
