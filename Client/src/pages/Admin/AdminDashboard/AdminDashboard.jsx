import { useEffect, useState } from "react";
import ProgressChart from "./ProgressChart";
import StatsCard from "./StatsCard";
import api from "../../../api/axios";

function AdminDashboard() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [tasksCount, setTasksCount] = useState(0);
  const [todoCount, setTodoCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const fetchDashboardData = async () => {
    try {
      const projectRes = await api.get("/project");
      const projects = projectRes.data.project || projectRes.data;
      setProjectsCount(projects.length);

      const taskRes = await api.get("/task");
      const tasks = taskRes.data.task || taskRes.data;
      setTasksCount(tasks.length);

      const todoTasks = tasks.filter(
        (task) => task.taskStatus === "To Do"
      );

      const completedTasks = tasks.filter(
        (task) => task.taskStatus === "Completed"
      );

      setTodoCount(todoTasks.length);
      setCompletedCount(completedTasks.length);
    } catch (error) {
      console.error("Dashboard data error:", error.message);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [projectsCount, tasksCount, todoCount, completedCount]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-8 text-white">

      {/* Page Title */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-cyan-400 tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-gray-300 mt-2">
          Overview of projects and task progress
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <StatsCard
          title="Total Projects"
          value={projectsCount}
          className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
        />
        <StatsCard
          title="Total Tasks"
          value={tasksCount}
          className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
        />
        <StatsCard
          title="To Do"
          value={todoCount}
          className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
        />
        <StatsCard
          title="Completed"
          value={completedCount}
          className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
        />
      </div>

      {/* Progress Chart */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-cyan-400">
            Task Progress
          </h2>
          <span className="text-gray-300 text-sm">
            Live status overview
          </span>
        </div>

        <ProgressChart />
      </div>
    </div>
  );
}

export default AdminDashboard;
