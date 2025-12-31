import { useState } from "react";
import api from "../../../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";



// src/components/users/UserForm.jsx
function UsersForm() {
  const{id}=useParams()
const navigate=useNavigate()

const[formuser,SetFromuser]=useState({
  fullName:"",
  email:"",
  role:""
})

const handleChange =(e)=>{
const {name,value}=e.target
SetFromuser((prev)=>{
  return {
    ...prev,
    [name]:value
  }
})
}
const fectchingdata=async()=>{
  try {
    const res=await api.get(`/adminUser/${id}`)
    SetFromuser({ fullName:res.data.AdminUser.fullName,
  email:res.data.AdminUser.email,
  role:res.data.AdminUser.role
    })
  } catch (error) {
    
  }
}
useEffect(()=>{
fectchingdata()
},[id])


const handleSubmit=async(e)=>{
    e.preventDefault()
try {
  const res= await api.put(`/adminUser/${id}`,formuser)
navigate("/admindashboard/adminusers");

} catch (error) {
   console.error("Error creating User:", error?.response?.data?.message);

}
}




  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-6 max-w-md">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">Add New User</h2>

      <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-4">
        <input
          type="text"
          name="fullName"
          onChange={(e)=>handleChange(e)}
          value={formuser.fullName}
          placeholder="Full Name"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <input
          type="email"
          name="email"
          onChange={(e)=>handleChange(e)}
          value={formuser.email}
          placeholder="Email Address"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <select
        name="role"
        onChange={(e)=>handleChange(e)}
        value={formuser.role}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600">
          <option value={"Admin"}>Admin</option>
          <option value={"Project Manager"}>Project Manager</option>
          <option value={"Developer"}>Developer</option>
        </select>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Update User
        </button>
      </form>
    </div>
  );
}

export default UsersForm;
