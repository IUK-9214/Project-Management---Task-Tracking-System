// src/components/projects/UserProjectCards.jsx

import { Link } from "react-router-dom";
import api from "../../../api/axios";

function UserProjectCards({ id, title, description }) {
  const handleDelete = async () => {
    try {
      await api.delete(`/project/${id}`);
      console.log("Deleted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="
        bg-[#1e293b]
        border border-gray-800
        rounded-2xl
        shadow-xl
        p-6
        flex flex-col justify-between
        hover:-translate-y-1
        hover:border-indigo-500/40
        hover:shadow-indigo-500/10
        transition-all duration-300
      "
    >
      {/* Content */}
      <div>
        <h3 className="text-2xl font-semibold text-indigo-400 mb-3">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Footer Buttons */}
      <div className="flex items-center gap-3 mt-6">
        
        <Link
          to={`/project/${id}`}
          className="
            px-4 py-2 rounded-xl
            bg-indigo-600 hover:bg-indigo-700
            text-white text-sm font-medium
            transition-all duration-300
          "
        >
          View
        </Link>

        
      </div>
    </div>
  );
}

export default UserProjectCards;