import ListMenu from "./ListMenu";
import { MdFastfood } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

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

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <span className="text-gray-600 flex items-center">
                <AiOutlinePlus /> Add Menus
              </span>
            </div>
          </div>
          <img
            id="footer-avatar"
            src="https://avatar.iran.liara.run/public"
            className="w-20 rounded-full"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
