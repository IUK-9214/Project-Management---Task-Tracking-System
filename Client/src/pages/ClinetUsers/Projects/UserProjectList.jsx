// src/components/projects/ProjectList.jsx
import { useEffect, useState } from "react";
import UserProjectCards from "./UserProjectCards";
import api from "../../../api/axios";

function UserProjectList() {
  const [Project, setProject] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/project");
      setProject(res.data.project || res.data);
    } catch (error) {
      console.error(
        "Error fetching projects:",
        error?.response?.data?.message || error.message
      );
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [Project]); // fixed dependency to avoid infinite loop

  return (
    <div
      className="
        bg-[#111827]
        border border-gray-800
        rounded-2xl
        shadow-xl
        p-6
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-6
        mx-auto
      "
    >
      {Project.map((project) => (
        <UserProjectCards
          key={project._id}
          id={project._id}
          title={project.title}
          description={project.desc}
        />
      ))}
    </div>
  );
}

export default UserProjectList;