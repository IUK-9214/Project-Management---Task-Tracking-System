// src/pages/admin/Users.jsx

import { Link, Outlet } from "react-router-dom";

function Users() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">
          Users
        </h1>

        {/* Add User Button */}
        <Link
          to="/admindashboard/adminusers/adduser"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          + Add User
        </Link>
      </div>

      {/* Users List / Nested Routes */}
      <Outlet />
    </div>
  );
}

export default Users;
