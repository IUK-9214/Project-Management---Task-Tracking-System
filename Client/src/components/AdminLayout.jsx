// src/components/layout/AdminLayout.jsx
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex min-h-screen 
                    bg-gradient-to-br from-black via-gray-900 to-black 
                    text-white">
      
      {/* Sidebar */}
      <SideBar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main
          className="p-6 flex-1 overflow-auto
                     bg-white/5 backdrop-blur-xl
                     border-t border-white/10
                     animate-fadeIn"
        >
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default AdminLayout;
