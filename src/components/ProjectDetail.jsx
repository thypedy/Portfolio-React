import React from "react";
import { useParams } from "react-router-dom";
import employeeMSImage from "../assets/suco.png";
import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 1,
    name: "Juice Bar",
    technologies: "Site responsivo",
    description: "Uma simulação de vendas onlines de bebidas para delivery.",
    image: employeeMSImage,
    githubLink: "https://github.com/thypedy/juice-bar", // Link do GitHub
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "MERN Stack",
    description: "Uma plataforma para blogging.",
    image: bookMSImage,
    githubLink: "https://github.com/yourusername/blog-app", // Link do GitHub
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "MERN Stack",
    description: "Um sistema de gerenciamento de livros.",
    image: employeeMSImage,
    githubLink: "https://github.com/yourusername/book-ms", // Link do GitHub
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <div className="bg-black text-white flex py-40 flex-col justify-center items-center p-8">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl font-bold mb-6">{project.name}</h2>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <img 
            src={project.image} 
            alt={project.name} 
            className="rounded-lg mb-4 w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105" 
          />
        </a>
        <p className="text-lg mb-4">{project.description}</p>
        <p className="text-gray-400">Tecnologias: {project.technologies}</p>
      </div>
    </div>
  );  
};

export default ProjectDetail;