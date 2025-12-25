

// src/pages/Home.jsx

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

        <nav className="flex flex-col gap-4">
          <Link to="/" className="hover:bg-indigo-600 px-3 py-2 rounded">
            Home
          </Link>

          <Link to="/user" className="hover:bg-indigo-600 px-3 py-2 rounded">
            User
          </Link>

          <Link to="/admindashboard" className="hover:bg-indigo-600 px-3 py-2 rounded">
            Admin
          </Link>
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <header className="h-16 bg-white shadow flex items-center px-6">
          <h1 className="text-xl font-semibold text-indigo-700">
            Home Dashboard
          </h1>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-2">Welcome Home 👋</h2>
          <p className="text-gray-600">
            Use the sidebar to navigate between User and Admin sections.
          </p>
        </main>

      </div>
    </div>
  );
}

export default Home;
