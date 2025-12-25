import ProgressChart from "./ProgressChart";
import StatsCard from "./StatsCard";


function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Total Projects" value="5" />
        <StatsCard title="Total Tasks" value="24" />
        <StatsCard title="To Do" value="8" />
        <StatsCard title="Completed" value="12" />
      </div>

      {/* Progress Chart */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">
          Task Progress
        </h2>
        <ProgressChart/>
      </div>
    </div>
  );
}

export default AdminDashboard;
