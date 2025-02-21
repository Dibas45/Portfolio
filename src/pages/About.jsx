import { Link } from "react-router-dom";


const About = () => {
  return (
    <section className=" h-screen bg-gray-900 text-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        
        <div className="flex justify-center mb-8">
          <img
            src="dibas.jpg" 
            alt="Dibas Image"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
          />
        </div>

        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          I'm Dibas Poudel, a passionate frontend developer specializing in crafting interactive and user-friendly web experiences. I love bringing designs to life with React, Tailwind CSS, and modern web technologies.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          With expertise in HTML, CSS, JavaScript, React, Tailwind CSS, and GSAP, I aim to build seamless digital experiences. Currently, I'm working on Different Project and exploring advanced React concepts.
        </p>

        <div className="flex justify-center gap-6 mt-8">
  <img
    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/html5.svg"
    alt="HTML"
    className="w-12 h-12 filter invert-100 brightness-200"
  />
  <img
    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/css3.svg"
    alt="CSS"
    className="w-12 h-12 filter invert-100 brightness-200"
  />
  <img
    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/javascript.svg"
    alt="JavaScript"
    className="w-12 h-12 filter invert-100 brightness-200"
  />
  <img
    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/react.svg"
    alt="React"
    className="w-12 h-12 filter invert-100 brightness-200"
  />
  <img
    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/tailwindcss.svg"
    alt="Tailwind CSS"
    className="w-12 h-12 filter invert-100 brightness-200"
  />
  <img
    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/greensock.svg"
    alt="GSAP"
    className="w-12 h-12 filter invert-100 brightness-200"
  />
</div>

        <div className="mt-8">
          <Link to="/contact" className="text-blue-400 hover:underline">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
