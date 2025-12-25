

// src/pages/admin/Users.jsx

import UsersForm from "./UsersForm";
import UsersList from "./UsersList";

function Users() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Users
      </h1>

      {/* Add User Form */}
      <div className="mb-8">
        <UsersForm />
      </div>

      {/* Users List */}
      <UsersList />
    </div>
  );
}

export default Users;
