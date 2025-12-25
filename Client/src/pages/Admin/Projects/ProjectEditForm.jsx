// src/components/projects/ProjectForm.jsx

import { useNavigate, useParams } from "react-router-dom";
import { dummyProjects } from "./dummprojectdata";
import { useEffect, useState } from "react";

function ProjectEditForms() {
  const {id} =useParams()
  const navigate = useNavigate();

  const [data,setdata]=useState({
    title:"",
    description:""
  })

const   handlechange =(e)=>{
const name =e.target.name
const value =e.target.value
setdata((perv)=>{
    return{
        ...prev,
        [name]:value
    }
})

}


  useEffect(()=>{
const project =dummyProjects.find(
    (p) => p.id === Number(id)
);
if(project){
    setdata(project)
       }
    },[])

 

  const handleSubmit = (e) => {

    0
  e.preventDefault()

    // 🔹 save project logic here (API / state)

    navigate('/admindashboard/adminprojects'); 
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-6 max-w-md">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">
        Edit Project
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
        name="text"
          type="text"
          onChange={(e)=>handlechange(e)}
          value={data.title}
          placeholder="Project Title"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        />

        <textarea
        name="description"
          onChange={(e)=>handlechange(e)}
          value={data.description}
          placeholder="Project Description"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Update Project
        </button>
      </form>
    </div>
  );
}

export default ProjectEditForms;
