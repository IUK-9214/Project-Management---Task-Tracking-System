

// src/components/users/RoleBadge.jsx
function RoleBadge({ role }) {
  const roleColors = {
    Admin: "bg-red-200 text-red-800",
    "Project Manager": "bg-blue-200 text-blue-800",
    Developer: "bg-green-200 text-green-800",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${roleColors[role]}`}
    >
      {role}
    </span>
  );
}

export default RoleBadge;
