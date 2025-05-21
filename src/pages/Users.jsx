import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-lg font-semibold">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-green-700 mb-6">User List</h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="px-6 py-3 text-left border-b text-xs font-semibold uppercase">ID</th>
              <th className="px-6 py-3 text-left border-b text-xs font-semibold uppercase">Name</th>
              <th className="px-6 py-3 text-left border-b text-xs font-semibold uppercase">Username</th>
              <th className="px-6 py-3 text-left border-b text-xs font-semibold uppercase">Email</th>
              <th className="px-6 py-3 text-left border-b text-xs font-semibold uppercase">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="transition-all duration-300 hover:bg-green-50">
                <td className="px-6 py-4 border-b text-sm font-medium text-gray-600">{user.id}</td>
                <td className="px-6 py-4 border-b text-sm text-gray-700">{user.name}</td>
                <td className="px-6 py-4 border-b text-sm text-gray-600">{user.username}</td>
                <td className="px-6 py-4 border-b text-sm text-gray-600">{user.email}</td>
                <td className="px-6 py-4 border-b text-sm text-gray-600">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
