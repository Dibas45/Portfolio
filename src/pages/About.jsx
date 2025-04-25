import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 py-10 px-4 sm:px-6 md:px-12 lg:px-20 pt-20 md:pt-24 flex items-center">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-2xl font-semibold mb-6">About Me</h2>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="dibas.jpg"
            alt="Dibas Image"
            className="w-24 h-24 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-gray-700"
          />
        </div>

        {/* About Text */}
        <p className="text-base sm:text-sm text-gray-300 leading-relaxed mb-4">
          I'm Dibas Poudel, a passionate frontend developer specializing in crafting interactive and user-friendly web experiences. I love bringing designs to life with React, Tailwind CSS, and modern web technologies.
        </p>

        <p className="text-base sm:text-sm text-gray-300 leading-relaxed">
          With expertise in HTML, CSS, JavaScript, React, Tailwind CSS, and GSAP, I aim to build seamless digital experiences. Currently, I'm working on different projects and exploring advanced React concepts.
        </p>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
          {[
            "html5",
            "css3",
            "javascript",
            "react",
            "tailwindcss",
            "greensock",
          ].map((tech) => (
            <img
              key={tech}
              src={`https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/${tech}.svg`}
              alt={tech}
              className="w-8 sm:w-6 filter invert brightness-200"
            />
          ))}
        </div>

        {/* Contact Link */}
        <div className="mt-8">
          <Link
            to="/contact"
            className="text-green-400 text-lg sm:text-base hover:underline"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
