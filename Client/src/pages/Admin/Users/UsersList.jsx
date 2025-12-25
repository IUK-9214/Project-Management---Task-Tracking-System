

// src/components/users/UserList.jsx
import UserCard from "./UserCard";

// Dummy users for UI
const dummyUsers = [
  { id: 1, name: "Ali Khan", email: "ali@example.com", role: "Admin" },
  { id: 2, name: "Sara Ahmed", email: "sara@example.com", role: "Project Manager" },
  { id: 3, name: "Bilal Raza", email: "bilal@example.com", role: "Developer" },
];

function UsersList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dummyUsers.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email} role={user.role} />
      ))}
    </div>
  );
}

export default UsersList;
