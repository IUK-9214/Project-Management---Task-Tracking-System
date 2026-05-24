import { Link } from "react-router-dom";
import api from "../../../api/axios";

function ProjectCards({ id, title, description }) {
  const handleDelete = async () => {
    try {
      await api.delete(`/project/${id}`);
      console.log("Deleted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white/10  backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transform transition-all duration-300 cursor-pointer">
      
      <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>

      <div className="flex gap-3 mt-5">

      </div>
    </div>
  );
}

export default ProjectCards;
