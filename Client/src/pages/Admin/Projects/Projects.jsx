// src/pages/admin/Projects.jsx

import { Link, Outlet } from "react-router-dom";



function Projects() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Projects
      </h1>
    <div className="mb-8">
       
      <Link to="/admindashboard/addproject" className="bg-indigo-600 text-white px-4 py-2 rounded">
  ADD PROJECT
</Link>

      </div>
   <Outlet/>
      
    </div>
  );
}

export default Projects;
