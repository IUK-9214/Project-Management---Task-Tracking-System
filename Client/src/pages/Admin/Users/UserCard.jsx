// src/components/users/UserCard.jsx
import { Link, useParams } from "react-router-dom";
import RoleBadge from "./RoleBadge";
import api from "../../../api/axios";

function UserCard({ id, name, email, role }) {

  const handleDelete = async () => {
    try {
      await api.delete(`/adminUser/${id}`);
    } catch (error) {
      console.error("Error creating User:", error?.response?.data?.message);
    }
  };

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl shadow-xl p-5 flex flex-col justify-between hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all duration-300">

      
      <h3 className="text-xl font-bold text-white">
        {name}
      </h3>

     
      <p className="text-gray-400 mt-1 text-sm break-all">
        {email}
      </p>

     
      <div className="mt-3">
        <RoleBadge role={role} />
      </div>

      
      <div className="flex gap-2 mt-5">

        <Link
          to={`/admindashboard/adminusers/edituser/${id}`}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm
                     hover:bg-indigo-700 transition shadow-md"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm
                     hover:bg-red-600 hover:text-white transition"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default UserCard;