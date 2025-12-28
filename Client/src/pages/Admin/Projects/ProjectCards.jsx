import { Link } from "react-router-dom";
import api from "../../../api/axios";

function ProjectCards({ id, title, description }) {

  const handleDelete = async () => {
    try {
      await api.delete(`/project/${id}`); // FIXED
      console.log("Deleted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      
      <h3 className="text-xl font-semibold text-indigo-600">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>

      <div className="flex gap-2 mt-4">
        <Link
          to={`/admindashboard/editproject/${id}`}
          className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProjectCards;
