// src/pages/admin/Projects.jsx

import UserProjectList from "./UserProjectList";
import { useNavigate } from "react-router-dom";

function UserProjects() {

  const navigate=useNavigate();
  const handleclick =async()=>{
    navigate('/user')
  }

  return (
    <div className="min-h-screen bg-[#0f172a] px-6 py-8">

      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        
        <div>
          <button  
          className="px-4 py-2 
                         bg-gradient-to-r from-cyan-400 to-blue-500 
                         text-black rounded-lg 
                         hover:scale-105 transition"
          onClick={handleclick}>
           {` Go back`}
          </button>
          <h1 className="text-3xl font-bold text-indigo-500">
            Projects
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            Manage and track all project activities
          </p>
        </div>

      </div>

      
      <div
        className="
          bg-[#111827]
          border border-gray-800
          rounded-2xl
          shadow-xl
          p-6
          min-h-[400px]
        "
      >
        <UserProjectList />
      </div>
    </div>
  );
}

export default UserProjects;