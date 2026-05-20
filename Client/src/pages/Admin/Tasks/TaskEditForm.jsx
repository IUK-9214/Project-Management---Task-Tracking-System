// src/components/tasks/TaskForm.jsx

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/axios.js";

function TaskForms() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  const [formtask, setFormtask] = useState({
    taskProject: "",
    taskTitle: "",
    taskDesc: "",
    taskStatus: "To Do",
    taskAssign: ""
  });

  /* 🔹 Fetch single task (for edit) */
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await api.get(`/task/${id}`);
        const task = res.data.onetask;

        setFormtask({
          taskProject: task.taskProject || "",
          taskTitle: task.taskTitle || "",
          taskDesc: task.taskDesc || "",
          taskStatus: task.taskStatus || "To Do",
          taskAssign: task.taskAssign || ""
        });
      } catch (error) {
        console.error("Error fetching task:", error?.response?.data?.message);
      }
    };

    fetchTask();
  }, [id]);

  /* 🔹 Fetch projects */
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

  /* 🔹 Fetch users */
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/adminUser");
        setUsers(res.data.AdminUser);
      } catch (error) {
        console.error("Error fetching users:", error?.response?.data?.message);
      }
    };

    fetchUsers();
  }, []);

  /* 🔹 Handle change */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormtask((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  /* 🔹 Submit update */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/task/${id}`, formtask);
      navigate("/admindashboard/admintasks");
    } catch (error) {
      console.error("Error updating task:", error?.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-[#0f172a]">

      <div className="w-full max-w-2xl bg-[#111827] border border-gray-800 rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-indigo-500">
            Update Task
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Modify task details and update progress.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Project */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Project
            </label>

            <select
              name="taskProject"
              value={formtask.taskProject}
              onChange={handleChange}
              className="w-full bg-[#1f2937] border border-gray-700 text-white
                         rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500
                         outline-none transition"
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

          {/* Title */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Task Title
            </label>

            <input
              type="text"
              name="taskTitle"
              value={formtask.taskTitle}
              onChange={handleChange}
              placeholder="Task Title"
              className="w-full bg-[#1f2937] border border-gray-700 text-white
                         placeholder-gray-400 rounded-xl px-4 py-3
                         focus:ring-2 focus:ring-indigo-500 outline-none transition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Description
            </label>

            <textarea
              name="taskDesc"
              value={formtask.taskDesc}
              onChange={handleChange}
              placeholder="Task Description"
              rows="5"
              className="w-full bg-[#1f2937] border border-gray-700 text-white
                         placeholder-gray-400 rounded-xl px-4 py-3
                         focus:ring-2 focus:ring-indigo-500 outline-none transition resize-none"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Status
            </label>

            <select
              name="taskStatus"
              value={formtask.taskStatus}
              onChange={handleChange}
              className="w-full bg-[#1f2937] border border-gray-700 text-white
                         rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500
                         outline-none transition"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Assign User */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Assign User
            </label>

            <select
              name="taskAssign"
              value={formtask.taskAssign}
              onChange={handleChange}
              className="w-full bg-[#1f2937] border border-gray-700 text-white
                         rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500
                         outline-none transition"
              required
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user._id} value={user.fullName}>
                  {user.fullName}
                </option>
              ))}
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white
                       font-semibold py-3 rounded-xl shadow-lg
                       hover:shadow-indigo-500/30 transition"
          >
            Update Task
          </button>

        </form>
      </div>
    </div>
  );
}

export default TaskForms;