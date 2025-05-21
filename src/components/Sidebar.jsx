import ListMenu from "./ListMenu";

export default function Sidebar() {
  return (
    <div className="min-h-screen w-80 bg-white p-6 shadow-lg flex flex-col">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Sedap <span className="text-hijau">.</span>
        </h1>
        <p className="text-sm text-gray-400">Modern Admin Dashboard</p>
      </div>

      <ListMenu />

      <div className="mt-auto text-sm text-gray-400">
        <p className="font-bold">Sedap Restaurant Admin Dashboard</p>
        <p>&copy; 2025 All Rights Reserved</p>
      </div>
    </div>
  );
}
