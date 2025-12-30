// src/pages/admin/Projects.jsx

import { Link, Outlet } from "react-router-dom";

function Projects() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* Header + Button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">
          Projects
        </h1>

        <Link
          to="/admindashboard/addproject"
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg
                     hover:bg-indigo-700 transition shadow-md"
        >
          + Add Project
        </Link>
      </div>

      {/* Content */}
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Projects;
