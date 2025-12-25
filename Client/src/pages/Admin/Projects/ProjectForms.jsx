// src/components/projects/ProjectForm.jsx

import { useNavigate } from "react-router-dom";

function ProjectForms() {
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault()

    // 🔹 save project logic here (API / state)

    navigate('/admindashboard/adminprojects'); 
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-6 max-w-md">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">
        Add New Project
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Project Title"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        />

        <textarea
          placeholder="Project Description"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}

export default ProjectForms;
