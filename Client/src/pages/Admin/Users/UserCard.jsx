

// src/components/users/UserCard.jsx
import RoleBadge from "./RoleBadge";

function UserCard({ name, email, role }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-indigo-600">{name}</h3>
      <p className="text-gray-500 mt-1">{email}</p>
      <div className="mt-3">
        <RoleBadge role={role} />
      </div>
      <div className="flex gap-2 mt-4">
        <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition">
          Edit
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300 transition">
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard;
