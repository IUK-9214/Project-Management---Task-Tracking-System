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
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg p-8 max-w-md mx-auto mt-10">
      
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
        Add New Project
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="title"
          value={formdata.title}
          onChange={handleChange}
          placeholder="Project Title"
          className="bg-white/20 placeholder-gray-300 text-white border border-white/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          required
        />

        <textarea
          name="desc"
          value={formdata.desc}
          onChange={handleChange}
          placeholder="Project Description"
          className="bg-white/20 placeholder-gray-300 text-white border border-white/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
          rows={4}
          required
        />

        <button
          type="submit"
          className="bg-cyan-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-cyan-500 transition"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}

export default ProjectForms;
