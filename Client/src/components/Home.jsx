// src/pages/Home.jsx

import { Link } from "react-router-dom";
import { Home as HomeIcon, Users, ShieldCheck } from "lucide-react";

function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white flex flex-col shadow-lg">
        <div className="p-6 border-b border-indigo-600">
          <h2 className="text-2xl font-bold tracking-wide">
            Task Manager
          </h2>
          <p className="text-sm text-indigo-200 mt-1">
            Admin Dashboard
          </p>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            <HomeIcon size={20} />
            Home
          </Link>

          <Link
            to="/user"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            <Users size={20} />
            Users
          </Link>

          <Link
            to="/admindashboard"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            <ShieldCheck size={20} />
            Admin
          </Link>
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
       {/* Navbar */}
<header className="h-16 bg-white shadow flex items-center justify-between px-6">
  <h1 className="text-xl font-semibold text-indigo-700">
    Home Dashboard
  </h1>

  {/* Auth Buttons */}
  <div className="flex gap-3">
    <Link
      to="/login"
      className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition"
    >
      Login
    </Link>

    <Link
      to="/signup"
      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
    >
      Sign Up
    </Link>
  </div>
</header>


        {/* Content */}
        <main className="p-8 space-y-6">

          {/* Welcome */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome 👋
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              This is a full-stack Project Management & Task Tracking System
              designed to manage projects, tasks, and users efficiently.
            </p>
          </div>

          {/* Project Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                📌 Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Create, update, and manage multiple projects with structured task
                assignments and progress tracking.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                ✅ Tasks
              </h3>
              <p className="text-gray-600 text-sm">
                Perform full CRUD operations on tasks with status tracking
                (To Do, In Progress, Completed).
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                👥 Users & Roles
              </h3>
              <p className="text-gray-600 text-sm">
                Manage users with role-based access such as Admin, Project Manager,
                and Developer.
              </p>
            </div>

          </div>

          {/* Tech Stack */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              ⚙️ Technology Stack
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Built using <b>React</b> for the frontend, <b>Node.js & Express</b>
              for backend APIs, <b>MongoDB</b> for database management, and
              styled with <b>Tailwind CSS</b>. Routing is handled using
              <b> React Router</b> with a modular and scalable architecture.
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Home;
