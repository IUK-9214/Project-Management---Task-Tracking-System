

// src/components/users/UserList.jsx
import { useState } from "react";
import UserCard from "./UserCard";
import api from "../../../api/axios";

import { useEffect } from "react";

// Dummy users for UI


function UsersList() {



  const [Users, setUsers] = useState([])
  const fecthingData = async () => {
    try {
      const res = await api.get(`/adminUser`)
      setUsers(res.data.AdminUser);

    } catch (error) {
      console.error("Error creating User:", error?.response?.data?.message);
    }

  }
  useEffect(() => {
    fecthingData()
  }, [Users])


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Users.map((user) => (
        <UserCard key={user._id}
        id={user._id}
        name={user.fullName} email={user.email} role={user.role} />
      ))}
    </div>
  );
}

export default UsersList;
