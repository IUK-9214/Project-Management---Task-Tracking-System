import { useState, useEffect } from "react";
import api from "../../../api/axios";
import { useNavigate, useParams } from "react-router-dom";

// src/components/users/UserForm.jsx
function UsersForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formuser, SetFromuser] = useState({
    fullName: "",
    email: "",
    role: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFromuser((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const fectchingdata = async () => {
    try {
      const res = await api.get(`/adminUser/${id}`);
      SetFromuser({
        fullName: res.data.AdminUser.fullName,
        email: res.data.AdminUser.email,
        role: res.data.AdminUser.role
      });
    } catch (error) {}
  };

  useEffect(() => {
    fectchingdata();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/adminUser/${id}`, formuser);
      navigate("/admindashboard/adminusers");
    } catch (error) {
      console.error("Error creating User:", error?.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-[#0f172a]">

      <div className="w-full max-w-md bg-[#111827] border border-gray-800 rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-indigo-500 mb-6">
          Update User
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              onChange={(e) => handleChange(e)}
              value={formuser.fullName}
              placeholder="Full Name"
              className="w-full bg-[#1f2937] border border-gray-700 text-white
                         rounded-xl px-4 py-3 focus:outline-none
                         focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Email
            </label>

            <input
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
              value={formuser.email}
              placeholder="Email Address"
              className="w-full bg-[#1f2937] border border-gray-700 text-white
                         rounded-xl px-4 py-3 focus:outline-none
                         focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Role
            </label>

            <select
              name="role"
              onChange={(e) => handleChange(e)}
              value={formuser.role}
              className="w-full bg-[#1f2937] border border-gray-700 text-white
                         rounded-xl px-4 py-3 focus:outline-none
                         focus:ring-2 focus:ring-indigo-500 transition"
            >
              <option value={"Admin"}>Admin</option>
              <option value={"Project Manager"}>Project Manager</option>
              <option value={"Developer"}>Developer</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white
                       font-semibold py-3 rounded-xl shadow-lg
                       hover:shadow-indigo-500/30 transition"
          >
            Update User
          </button>

        </form>
      </div>
    </div>
  );
}

export default UsersForm;