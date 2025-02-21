

const Projects = () => {
  const projectsData = [
    {
      title: 'D-Movies',
      description: 'D-Movies is an movies app where we can search movies,gives rating to the movies and add the movies into list',
      image: 'movie.png',
      techStack: ['React.js', 'Tailwind Css', ],
      link: 'https://d-movies-pi.vercel.app/' 
    },
    {
        title: 'E-Learning Website',
        description: 'E-Learning Webiste is a app where we can take courses and give mock test ',
        image: 'elearn.png',
        techStack: ['React.js', 'Tailwind Css', 'Redux'],
        link: 'https://e-learning-website-delta.vercel.app/' 
      },
      {
        title: 'E-Commerce Website',
        description: 'E-Commerce Webiste is a app where we can Buy products and add to cart',
        image: 'commerce.png',
        techStack: ['React.js', 'Tailwind Css', ],
        link: 'https://e-commerce-website-tau-lake-30.vercel.app//' 
      },
   
  ];

  return (
    <div className="bg-gray-100 min-h-screen " > {/* Overall page background and min height */}
      
      <div className="container  flex flex-col mx-auto px-4 py-12"> {/* Center content and add padding */}
        <h2 className="text-3xl font-bold mb-8 text-center">What I've Been Working On</h2>
        <div className="flex flex-col justify-center items-center gap-6"> {/* Responsive grid */}
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <img src={project.image} alt={project.title} className="w-36 h-36 mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap"> {/* Tech stack tags */}
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-200 rounded-md px-2 py-1 mr-2 mb-2 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;