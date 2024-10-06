// Projects.jsx
import React from "react";
import { Link } from "react-router-dom";
import suco from "../assets/suco.png";
import bookMSImage from "../assets/admin-dashboard.png";
import employeeMSImage from "../assets/employee-ms.png"

const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    image: suco,
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "MERN Stack",
    image: bookMSImage,
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "MERN Stack",
    image: employeeMSImage,
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white flex flex-col py-40 justify-center" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-12">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="hover:scale-105 transform transition-transform duration-300">
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg">
                <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.technologies}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
