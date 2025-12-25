import { Link } from "react-router-dom";



function ProjectCards({ id,title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      {/* Project Title */}
      <h3 className="text-xl font-semibold text-indigo-600">{title}</h3>

      {/* Project Description */}
      <p className="text-gray-500 mt-2">{description}</p>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-4">
        <Link to={`/admindashboard/editproject/${id}`} className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition">
          Edit
        </Link>
        <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300 transition">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProjectCards;
