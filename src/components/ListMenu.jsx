// src/components/ListMenu.jsx
import { NavLink } from "react-router-dom";
import { MdDashboard, MdFastfood, MdPeople, MdShoppingCart, MdPerson, MdError } from "react-icons/md";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex items-center p-3 rounded-lg space-x-2 cursor-pointer
    ${
      isActive
        ? "bg-green-200 text-hijau font-bold"
        : "text-gray-600 hover:bg-green-100 hover:text-hijau"
    }`;

  const menus = [
    { to: "/", label: "Dashboard", icon: <MdDashboard /> },
    { to: "/orders", label: "Orders", icon: <MdShoppingCart /> },
    { to: "/customers", label: "Customers", icon: <MdPeople /> },
    { to: "/users", label: "Users", icon: <MdPerson /> },
    { to: "/products", label: "Products", icon: <MdFastfood /> },
    { to: "/notfound", label: "Error 404", icon: <MdError /> },
    { to: "/error403", label: "Error 403", icon: <MdError /> },
    { to: "/error401", label: "Error 401", icon: <MdError /> },
    { to: "/error400", label: "Error 400", icon: <MdError /> },
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
