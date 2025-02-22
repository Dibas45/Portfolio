import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-gray-800 text-white p-2 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

     
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
       
        {/* Circular Image with Name */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="dibas.jpg"
            alt="Dibas Poudel"
            className="rounded-full w-24 h-24 mb-4 border-4 border-gray-700 shadow-lg"
          />
          <h2 className="text-xl font-semibold">Dibas Poudel</h2>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-6 text-lg">
          <Link to="/home" className="block hover:text-gray-400 transition">
            Home
          </Link>
          <Link to="/about" className="block hover:text-gray-400 transition">
            About
          </Link>
          <Link to="/projects" className="block hover:text-gray-400 transition">
            Projects
          </Link>
          <Link to="/contact" className="block hover:text-gray-400 transition">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="mt-16 flex justify-center space-x-6">
          <a
            href="https://github.com/Dibas45"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/dibas-poudel-619757321/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://www.instagram.com/dibaspoudel45/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaInstagram size={28} />
          </a>
        </div>
      </div>

      {/* Overlay to close sidebar on mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
        ></div>
      )}
    </>
  );
};

export default Navbar;