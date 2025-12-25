

import { Link } from "react-router-dom";

function SideBar() {
  const linkClasses = "block py-2 px-4 rounded hover:bg-indigo-50 transition";

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-6 hidden md:block">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-2">
       <Link to="/" className={({isActive}) => isActive ? linkClasses + " bg-indigo-50 font-semibold" : linkClasses}>
          Home
        </Link>
        <Link to="/admindashboard" className={({isActive}) => isActive ? linkClasses + " bg-indigo-50 font-semibold" : linkClasses}>
          Dashboard
        </Link>
        <Link to="adminprojects" className={({isActive}) => isActive ? linkClasses + " bg-indigo-50 font-semibold" : linkClasses}>
          Projects
        </Link>
        <Link to="admintasks" className={({isActive}) => isActive ? linkClasses + " bg-indigo-50 font-semibold" : linkClasses}>
          Tasks
        </Link>
        <Link to="adminusers" className={({isActive}) => isActive ? linkClasses + " bg-indigo-50 font-semibold" : linkClasses}>
          Users
        </Link>
      </nav>
    </div>
  );
}

export default SideBar;
