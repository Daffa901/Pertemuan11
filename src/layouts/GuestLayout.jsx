import { Outlet } from "react-router-dom";
import Navbar from "../components/guest/Navbar.jsx";
import Footer from "../components/guest/Footer.jsx";
import About from "../components/guest/About.jsx";

export default function GuestLayout() {
  return (
    <div id="app-container" className="bg-white min-h-screen flex flex-col">

      <Navbar />

      <main id="main-content" className="flex-1 px-8 py-6 bg-gray-50">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}