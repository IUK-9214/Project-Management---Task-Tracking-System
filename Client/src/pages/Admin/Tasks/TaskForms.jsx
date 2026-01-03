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
    <div className="bg-white border border-gray-200 rounded-xl shadow p-6 max-w-md">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">
        Add New Task
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* 🔹 Project Dropdown */}
        <select
          name="taskProject"
          value={formtask.taskProject}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2"
          required
        >
          <option value="">Select Project</option>
          {projects.map((project) => (
            <option key={project._id} value={project.title}>
              {project.title}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="taskTitle"
          value={formtask.taskTitle}
          onChange={handleChange}
          placeholder="Task Title"
          className="border border-gray-300 rounded px-3 py-2"
          required
        />

        <textarea
          name="taskDesc"
          value={formtask.taskDesc}
          onChange={handleChange}
          placeholder="Task Description"
          className="border border-gray-300 rounded px-3 py-2"
        />

        <select
          name="taskStatus"
          value={formtask.taskStatus}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          name="taskAssign"
          value={formtask.taskAssign}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2"
          required
        >
          <option value="">Select User</option>
          {Users.map((User) => (
            <option key={User._id} value={User.fullName}>
              {User.fullName}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForms;
