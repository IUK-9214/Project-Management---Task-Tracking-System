// src/pages/admin/Projects.jsx

import { Link, Outlet } from "react-router-dom";

function Projects() {
  return (
    <div className="p-6 bg-black-500 min-h-screen">
      
      {/* Header + Button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">
          Projects
        </h1>

        
      </div>

      {/* Content */}
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Projects;
