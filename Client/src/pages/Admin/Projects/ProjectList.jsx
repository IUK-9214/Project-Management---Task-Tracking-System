

// src/components/projects/ProjectList.jsx
import { useEffect, useState } from "react";
import ProjectCards from "./ProjectCards";
import api from "../../../api/axios";




function ProjectList() {



const[Project,setProject]=useState([])


 const fetchProjects = async () => {
      try {
        const res = await api.get("/project");
        setProject( res.data.project ||res.data); // depends on backend response
      } catch (error) {
        console.error("Error fetching projects:", error?.response?.data?.message || error.message);
      }
    }



useEffect(()=>{
  fetchProjects()
},[Project])


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Project.map((project) => (
        <ProjectCards
          key={project._id}
          id={project._id}
          title={project.title}
          description={project.desc}
        />
      ))}
    </div>
  );
}

export default ProjectList;
