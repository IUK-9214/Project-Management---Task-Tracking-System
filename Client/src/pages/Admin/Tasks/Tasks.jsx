// src/pages/admin/Tasks.jsx

import TaskForms from "./TaskForms";
import TasksList from "./TasksList";




function Tasks() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Tasks
      </h1>

      {/* Add Task Form */}

      <div className="mb-8">
        <TaskForms/>
      </div>

      {/* Task List */}
      
      <TasksList />
    </div>
  );
}

export default Tasks; 
