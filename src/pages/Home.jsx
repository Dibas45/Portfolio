
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (

      <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center px-6 md:px-24 py-16 pt-32 lg:ml-44">
        {/* Left Section */}
        <div className="md:w-2/3 space-y-8">
          <span className="text-green-400 font-semibold text-lg">OPEN TO WORK</span>
          <h1 className="text-6xl font-extrabold leading-tight">
            Hello & welcome to my <br /> Portfolio
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            I'm Dibas Poudel, a passionate frontend developer with expertise in
            React, JavaScript, and UI/UX design. I focus on building modern,
            user-friendly web applications with cutting-edge technologies.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 flex flex-col items-center mt-10 md:mt-0 space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="dibas.jpg"
              alt="Dibas Poudel"
              className="rounded-full w-28 h-28 border-4 border-gray-700 shadow-lg"
            />
          </div>
        {/* Right Section */}
        <div className="md:w-1/3 flex flex-col items-center mt-10 md:mt-0 space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="dibas.jpg"
              alt="Dibas Poudel"
              className="rounded-full w-28 h-28 border-4 border-gray-700 shadow-lg"
            />
          </div>

          {/* Experience & Resume */}
          <div className="grid grid-cols-2 gap-6 w-full">
            <div className="bg-gray-800 p-5 rounded-xl text-center cursor-pointer">
              <a href="resume.pdf " target="_blank">Download CV</a>
            </div>
          </div>
          {/* Experience & Resume */}
          <div className="grid grid-cols-2 gap-6 w-full">
            <div className="bg-gray-800 p-5 rounded-xl text-center cursor-pointer">
              <a href="resume.pdf " target="_blank">Download CV</a>
            </div>
          </div>

          {/* Hire Me */}
          <div className="bg-green-500 px-6 py-4 rounded-xl text-center font-bold text-black text-lg cursor-pointer w-full">
            <Link to="/contact">HIRE ME.</Link>
          </div>
          {/* Hire Me */}
          <div className="bg-green-500 px-6 py-4 rounded-xl text-center font-bold text-black text-lg cursor-pointer w-full">
            <Link to="/contact">HIRE ME.</Link>
          </div>

          {/* About Me and Projects */}
          <div className="bg-gray-800 px-6 py-4 rounded-xl text-center w-full">
            <Link to='/about'>About me</Link>
          </div>
          <div className="bg-gray-800 px-6 py-4 rounded-xl text-center w-full">
            <Link to='/projects'>Project</Link>
          </div>
          {/* About Me and Projects */}
          <div className="bg-gray-800 px-6 py-4 rounded-xl text-center w-full">
            <Link to='/about'>About me</Link>
          </div>
          <div className="bg-gray-800 px-6 py-4 rounded-xl text-center w-full">
            <Link to='/projects'>Project</Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.linkedin.com/in/dibas-poudel-619757321/" target="_blank" className="text-gray-400 hover:text-white">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/dibaspoudel45/" target="_blank" className="text-gray-400 hover:text-white">
              <FaInstagram size={30} />
            </a>
            <a href="https://github.com/Dibas45" target="_blank" className="text-gray-400 hover:text-white">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
     <div>
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.linkedin.com/in/dibas-poudel-619757321/" target="_blank" className="text-gray-400 hover:text-white">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/dibaspoudel45/" target="_blank" className="text-gray-400 hover:text-white">
              <FaInstagram size={30} />
            </a>
            <a href="https://github.com/Dibas45" target="_blank" className="text-gray-400 hover:text-white">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    
  );
};

export default Home;
