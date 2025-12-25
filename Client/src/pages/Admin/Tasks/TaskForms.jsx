// src/components/tasks/TaskForm.jsx


function TaskForms() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-6 max-w-md">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">Add New Task</h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Task Title"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <textarea
          placeholder="Task Description"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        ></textarea>

        <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600">
          <option>To Do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <input
          type="text"
          placeholder="Assign Users (comma separated)"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForms;
