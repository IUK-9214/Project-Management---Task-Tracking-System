

// src/components/layout/Navbar.jsx
function Navbar() {
  return (
    <div className="w-full bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center shadow-sm">
      <h1 className="text-xl font-bold text-indigo-600">Welcome, Admin</h1>
      <div>
        <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
