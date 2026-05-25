// src/pages/Home.jsx

import { Link, Outlet } from "react-router-dom";
import { Home as HomeIcon, Users, ShieldCheck } from "lucide-react";

function UserDashboard() {
  return (
    <div className="flex min-h-screen 
                    bg-gradient-to-br from-black via-gray-900 to-black 
                    text-white">

      {/* Sidebar */}
      <aside className="w-64 
                        bg-black/60 backdrop-blur-xl 
                        border-r border-white/10 
                        flex flex-col shadow-2xl">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold tracking-wide text-white">
            Task Manager
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Admin Dashboard
          </p>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2 rounded-lg 
                       hover:bg-white/10 transition"
          >
            <HomeIcon size={20} />
            Home
          </Link>

          <Link
            to="/userproject"
            className="flex items-center gap-3 px-4 py-2 rounded-lg 
                       hover:bg-white/10 transition"
          >
            <Users size={20} />
            Project
          </Link>
<Link
            to="/usertasklist"
            className="flex items-center gap-3 px-4 py-2 rounded-lg 
                       hover:bg-white/10 transition"
          >
            <Users size={20} />
            Task
          </Link>

<Link
            to="/userlist"
            className="flex items-center gap-3 px-4 py-2 rounded-lg 
                       hover:bg-white/10 transition"
          >
            <Users size={20} />
            User
          </Link>


          
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <header className="h-16 
                           bg-black/40 backdrop-blur-xl 
                           border-b border-white/10 
                           flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-cyan-400">
            Home Dashboard
          </h1>

          {/* Auth Buttons */}
          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-cyan-400 
                         border border-cyan-400/40 
                         rounded-lg hover:bg-cyan-400/10 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 
                         bg-gradient-to-r from-cyan-400 to-blue-500 
                         text-black rounded-lg 
                         hover:scale-105 transition"
            >
              Sign Up
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="p-8 space-y-6 animate-fadeIn">

          {/* Welcome */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Welcome 
            </h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              This is a full-stack Project Management & Task Tracking System
              designed to manage projects, tasks, and users efficiently.
            </p>
          </div>

          {/* Project Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white/5 backdrop-blur-xl 
                            rounded-xl shadow-lg p-6 
                            border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Projects
              </h3>
              <p className="text-gray-400 text-sm">
                Create, update, and manage multiple projects with structured task
                assignments and progress tracking.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl 
                            rounded-xl shadow-lg p-6 
                            border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                 Tasks
              </h3>
              <p className="text-gray-400 text-sm">
                Perform full CRUD operations on tasks with status tracking
                (To Do, In Progress, Completed).
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl 
                            rounded-xl shadow-lg p-6 
                            border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                 Users & Roles
              </h3>
              <p className="text-gray-400 text-sm">
                Manage users with role-based access such as Admin, Project Manager,
                and Developer.
              </p>
            </div>

          </div>

          {/* Tech Stack */}
          <div className="bg-white/5 backdrop-blur-xl 
                          rounded-xl shadow-lg p-6 
                          border border-white/10">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
               Technology Stack
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Built using <b>React</b> for the frontend, <b>Node.js & Express</b>
              for backend APIs, <b>MongoDB</b> for database management, and
              styled with <b>Tailwind CSS</b>. Routing is handled using
              <b> React Router</b> with a modular and scalable architecture.
            </p>
          </div>
<Outlet/>
        </main>
      </div>
    </div>
  );
}

export default UserDashboard;
