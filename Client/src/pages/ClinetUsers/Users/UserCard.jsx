// src/components/users/UserCard.jsx
import { Link, useParams } from "react-router-dom";
import RoleBadge from "./RoleBadge";
import api from "../../../api/axios";

function UserCard({ id, name, email, role }) {

  

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl shadow-xl p-5 flex flex-col justify-between hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all duration-300">

      {/* Name */}
      <h3 className="text-xl font-bold text-white">
        {name}
      </h3>

      {/* Email */}
      <p className="text-gray-400 mt-1 text-sm break-all">
        {email}
      </p>

      {/* Role */}
      <div className="mt-3">
        <RoleBadge role={role} />
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-5">

       


      </div>

    </div>
  );
}

export default UserCard;