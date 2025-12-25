


// src/components/users/UserForm.jsx
function UsersForm() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-6 max-w-md">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">Add New User</h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600">
          <option>Admin</option>
          <option>Project Manager</option>
          <option>Developer</option>
        </select>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default UsersForm;
