// src/components/ListMenu.jsx
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex items-center p-3 rounded-lg space-x-2 cursor-pointer
    ${isActive ? "bg-green-200 text-hijau font-bold" : "text-gray-600 hover:bg-green-100 hover:text-hijau"}`;

  const menus = [
    { to: "/", label: "Dashboard", icon: <MdDashboard /> },
    { to: "/orders", label: "Orders" },
    { to: "/customers", label: "Customers" },
    { to: "/users", label: "Users" },
    { to: "/notfound", label: "Error 404" },
    { to: "/error403", label: "Error 403" },
    { to: "/error401", label: "Error 401" },
    { to: "/error400", label: "Error 400" },

  ];

  return (
    <ul className="space-y-2 mt-6">
      {menus.map((menu, index) => (
        <li key={index}>
          <NavLink to={menu.to} className={menuClass}>
            {menu.icon && <span className="text-xl">{menu.icon}</span>}
            <span>{menu.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
