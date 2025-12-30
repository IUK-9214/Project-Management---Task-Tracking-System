// src/components/tasks/TaskForm.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios.js";

function TaskForms() {
  const navigate = useNavigate();

  const [formtask, setFormtask] = useState({
    taskTitle: "",
    taskDesc: "",
    taskStatus: "To Do",
    taskAssign: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormtask(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
        <input
          type="text"
          name="taskTitle"
          value={formtask.taskTitle}
          onChange={handleChange}
          placeholder="Task Title"
          className="border border-gray-300 rounded px-3 py-2"
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

        <input
          type="text"
          name="taskAssign"
          value={formtask.taskAssign}
          onChange={handleChange}
          placeholder="Assign Users (comma separated)"
          className="border border-gray-300 rounded px-3 py-2"
        />

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
