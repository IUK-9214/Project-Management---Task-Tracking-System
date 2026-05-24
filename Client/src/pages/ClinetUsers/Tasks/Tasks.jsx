// src/pages/admin/Tasks.jsx

import { Link, Outlet } from "react-router-dom";

function Tasks() {
  return (
    <div className="min-h-screen bg-[#0f172a] px-6 py-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

        <div>
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

        <Outlet />

      </div>
    </div>
  );
}

export default Tasks;