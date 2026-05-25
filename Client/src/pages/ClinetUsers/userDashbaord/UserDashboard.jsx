

import { Link, Outlet } from "react-router-dom";
import { Home as HomeIcon, FolderKanban, CheckSquare, Users } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../../redux/user/userSlice"; 
import api from "../../../api/axios";
import toast from "react-hot-toast";

function UserDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { currentuser } = useSelector((state) => state.user);
  const displayName = currentuser?.FullName || currentuser?.name || "User";
  const avatarLetter = displayName.charAt(0).toUpperCase();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      dispatch(signOut());              
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      
      <aside className="w-64 bg-black/60 backdrop-blur-xl border-r border-white/10 flex flex-col shadow-2xl">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold tracking-wide text-white">Task Manager</h2>
          
          <p className="text-sm text-gray-400 mt-1">User Dashboard</p>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          <Link to="/" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition">
            <HomeIcon size={20} /> Home
          </Link>
          <Link to="/userproject" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition">
            <FolderKanban size={20} /> Projects
          </Link>
          <Link to="/usertasklist" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition">
            <CheckSquare size={20} /> Tasks
          </Link>
          <Link to="/userlist" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition">
            <Users size={20} /> Users
          </Link>
        </nav>
      </aside>

      
    
      <div className="flex-1 flex flex-col">

      
        <header className="h-16 bg-black/40 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-cyan-400">
            Welcome, {displayName} 👋
          </h1>

          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 flex items-center justify-center font-semibold">
              {avatarLetter}
            </div>
            
            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium hover:shadow-lg hover:scale-105 transition"
            >
              Logout
            </button>
          </div>
        </header>

       
        <main className="p-8 space-y-6 animate-fadeIn">

          <div>
            <h2 className="text-3xl font-bold text-white">Welcome, {displayName} 👋</h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              This is your personal dashboard. Manage your projects, tasks, and team from here.
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-xl shadow-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">📌 Projects</h3>
              <p className="text-gray-400 text-sm">
                View and track all projects assigned to you with progress updates.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-xl shadow-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">✅ Tasks</h3>
              <p className="text-gray-400 text-sm">
                Manage your tasks with status tracking: To Do, In Progress, and Completed.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-xl shadow-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">👥 Team</h3>
              <p className="text-gray-400 text-sm">
                See your fellow team members and collaborate efficiently.
              </p>
            </div>
          </div>

          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default UserDashboard;
