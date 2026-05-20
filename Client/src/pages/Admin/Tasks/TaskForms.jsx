// src/components/tasks/TaskForm.jsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios.js";

function TaskForms() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [Users, setUsers] = useState([])

  const [formtask, setFormtask] = useState({
    taskProject: "",
    taskTitle: "",
    taskDesc: "",
    taskStatus: "To Do",
    taskAssign: ""
  });

  // 🔹 Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/project");
        setProjects(res.data.project);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [projects]);

  
    const fecthingData = async () => {
      try {
        const res = await api.get(`/adminUser`)
        setUsers(res.data.AdminUser);
  
      } catch (error) {
        console.error("Error creating User:", error?.response?.data?.message);
      }
  
    }
    useEffect(() => {
      fecthingData()
    }, [Users])


  // 🔹 Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormtask((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 🔹 Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/task", formtask);
      navigate("/admindashboard/admintasks");
    } catch (error) {
      console.error("Error creating task:", error?.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center px-4 py-10 bg-[#0f172a]">
      
      <div
        className="w-full max-w-2xl bg-[#111827] border border-gray-800
                   rounded-2xl shadow-2xl p-8"
      >
        
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-indigo-500">
            Create New Task
          </h2>

          <p className="text-gray-400 mt-2 text-sm">
            Assign and manage project tasks efficiently.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Project Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Project
            </label>

            <select
              name="taskProject"
              value={formtask.taskProject}
              onChange={handleChange}
              className="w-full bg-[#1f2937] border border-gray-700
                         text-white rounded-xl px-4 py-3
                         focus:outline-none focus:ring-2
                         focus:ring-indigo-500 transition"
              required
            >
              <option value="">Select Project</option>

              {projects.map((project) => (
                <option key={project._id} value={project.title}>
                  {project.title}
                </option>
              ))}
            </select>
          </div>

          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Task Title
            </label>

            <input
              type="text"
              name="taskTitle"
              value={formtask.taskTitle}
              onChange={handleChange}
              placeholder="Enter task title"
              className="w-full bg-[#1f2937] border border-gray-700
                         text-white placeholder-gray-400
                         rounded-xl px-4 py-3
                         focus:outline-none focus:ring-2
                         focus:ring-indigo-500 transition"
              required
            />
          </div>

          {/* Task Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Task Description
            </label>

            <textarea
              name="taskDesc"
              value={formtask.taskDesc}
              onChange={handleChange}
              placeholder="Write task details..."
              rows="5"
              className="w-full bg-[#1f2937] border border-gray-700
                         text-white placeholder-gray-400
                         rounded-xl px-4 py-3
                         focus:outline-none focus:ring-2
                         focus:ring-indigo-500 transition resize-none"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Task Status
            </label>

            <select
              name="taskStatus"
              value={formtask.taskStatus}
              onChange={handleChange}
              className="w-full bg-[#1f2937] border border-gray-700
                         text-white rounded-xl px-4 py-3
                         focus:outline-none focus:ring-2
                         focus:ring-indigo-500 transition"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Assign User */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Assign User
            </label>

            <select
              name="taskAssign"
              value={formtask.taskAssign}
              onChange={handleChange}
              className="w-full bg-[#1f2937] border border-gray-700
                         text-white rounded-xl px-4 py-3
                         focus:outline-none focus:ring-2
                         focus:ring-indigo-500 transition"
              required
            >
              <option value="">Select User</option>

              {Users.map((User) => (
                <option key={User._id} value={User.fullName}>
                  {User.fullName}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700
                       text-white font-semibold py-3 rounded-xl
                       transition duration-300 shadow-lg
                       hover:shadow-indigo-500/30"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForms;