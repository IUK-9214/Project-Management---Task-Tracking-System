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
  }, []);

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
    <div className="bg-white border border-gray-200 rounded-xl shadow p-6 max-w-md">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">
        Update Task
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Project */}
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

        {/* Title */}
        <input
          type="text"
          name="taskTitle"
          value={formtask.taskTitle}
          onChange={handleChange}
          placeholder="Task Title"
          className="border border-gray-300 rounded px-3 py-2"
          required
        />

        {/* Description */}
        <textarea
          name="taskDesc"
          value={formtask.taskDesc}
          onChange={handleChange}
          placeholder="Task Description"
          className="border border-gray-300 rounded px-3 py-2"
        />

        {/* Status */}
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

        {/* Assign User */}
        <select
          name="taskAssign"
          value={formtask.taskAssign}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2"
          required
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user._id} value={user.fullName}>
              {user.fullName}
            </option>
          ))}
        </select>

        {/* Submit */}
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Update Task
        </button>
      </form>
    </div>
  );
}

export default TaskForms;
