import { Link, Outlet } from "react-router-dom";
import React from 'react'
import UserTasksList from "./UserTasksList";
import { useNavigate } from "react-router-dom";

function Usertask() {
  const navigate = useNavigate()
 const handleclick =async()=>{
  navigate('/user')
 }

  return (
   // src/pages/admin/Tasks.jsx



    <div className="min-h-screen bg-[#0f172a] px-6 py-8">

      {/* Header */}
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
            Tasks
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            Manage and track all assigned tasks
          </p>
        </div>

        {/* Button */}
        
      </div>

      {/* Content Area */}
      <div className="bg-[#111827] border border-gray-800
                      rounded-2xl shadow-xl p-5 min-h-[400px]">

        <UserTasksList />
        

      </div>
    </div>


  )
}

export default Usertask