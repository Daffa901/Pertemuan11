import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-50 py-3 px-8 flex justify-between items-center text-sm">
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins-bold text-[48px] text-gray-900"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      <div className="flex space-x-8 text-gray-500 font-medium">
        <Link to="/home" className="hover:text-green-500">
          Home
        </Link>
        <Link to="/about" className="hover:text-green-500">
          About
        </Link>
        <Link to="/shop" className="hover:text-green-500">
          Shop
        </Link>
        <Link to="/testimoni" className="hover:text-green-500">
          Testimoni
        </Link>
      </div>

      <div className="flex items-center text-gray-600 space-x-2 cursor-pointer">
        <FaUser className="text-green-500" />
        <Link to="/login">
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Login/register
          </button>
        </Link>
      </div>
    </nav>
  );
}
