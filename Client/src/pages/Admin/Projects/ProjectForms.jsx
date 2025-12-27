import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios.js";

function ProjectForms() {
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    title: "",
    desc: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/project", formdata);
      navigate('/admindashboard/adminprojects');
    } catch (error) {
      console.error("Error creating project:", error?.response?.data?.message);
    }
  };

  return (
    <div className="bg-white border p-6 rounded max-w-md">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">Add New Project</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"        
          value={formdata.title}
          onChange={handleChange}
          placeholder="Project Title"
          className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-600"
          required
        />

        <textarea
          name="desc"       
          value={formdata.desc}
          onChange={handleChange}
          placeholder="Project Description"
          className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-600"
          required
        />

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
