import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-6 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

      <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins-bold text-[48px] text-white-900">
		                Sedap <b id="logo-dot" className="text-hijau">.</b>
		            </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>



        <div className="space-y-4">
          <h4 className="text-white font-semibold text-lg">Info Kontak</h4>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MdPhone className="text-green-500" /> 0813 7429 8174
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MdEmail className="text-green-500" /> sedapp@gmail.com
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-300">
            <MdLocationOn className="text-green-500 mt-1" />
            Riau,Pekanbaru,Umban Sari Atas 36
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-semibold text-lg">Social Media</h4>
          <ul className="text-sm space-y-1 text-gray-300">
            <li><FaTwitter className="cursor-pointer hover:text-green-500" />SedapppKalee</li>
            <li><FaFacebookF className="cursor-pointer hover:text-green-500" />SedapKalee</li>
            <li><FaInstagram className="cursor-pointer hover:text-green-500" />SedapKaleee</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-semibold text-lg">Explore</h4>
          <ul className="text-sm space-y-1 text-gray-300">
            <li>New Products</li>
            <li>My Account</li>
            <li>Support</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex space-x-4 text-white text-xl mb-4 md:mb-0">
          <FaTwitter className="cursor-pointer hover:text-green-500" />
          <FaFacebookF className="cursor-pointer hover:text-green-500" />
          <FaInstagram className="cursor-pointer hover:text-green-500" />
        </div>
        <p className="text-sm text-gray-400">&copy; Copyright 2025</p>
      </div>
    </footer>
  );
}
