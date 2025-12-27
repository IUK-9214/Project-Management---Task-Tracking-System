import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../api/axios";


function ProjectEditForms() {
  const { id } = useParams();
  const navigate = useNavigate();

  // State defined before useEffect
  const [data, setData] = useState({
    title: "",
    desc: ""
  });


const fetchingData=async()=>{
  try {
    const res = await api.get(`/project/${id}`)
    setData({
      title:res.data.oneproject.title,
      desc:res.data.oneproject.desc,
    })

  } catch (error) {
    console.log(error);
  }
}

  // Load project data
  useEffect(() => {
  fetchingData()
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit handler

  const handleSubmit = async(e) => {
     e.preventDefault();
   try {
    
 const res = await api.put(`/project/${id}`,data)

    console.log("Updated project data:", res);

    navigate("/admindashboard/adminprojects");

   } catch (error) {
     console.error("Error creating product:", error?.response?.data?.message);
   }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-6 max-w-md">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">
        Edit Project
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="title"
          type="text"
          value={data.title}
           onChange={(e)=>handleChange(e)}
          placeholder="Project Title"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        />

        <textarea
          name="desc" // ✅ matches state key
          value={data.desc}
          onChange={(e)=>handleChange(e)}
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
