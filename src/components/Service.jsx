import React from "react";

const services = [
  {
    id: 1,
    title: "Design de Websites",
    description: "Criando designs de websites visualmente atraentes e amigáveis ao usuário.",
  },
  {
    id: 2,
    title: "Desenvolvimento Frontend",
    description: "Construindo interfaces de usuário responsivas e interativas.",
  },
  {
    id: 3,
    title: "Desenvolvimento Backend",
    description: "Desenvolvendo lógica robusta do lado do servidor e bancos de dados.",
  },
  {
    id: 4,
    title: "Desenvolvimento Full-Stack",
    description: "Combinando habilidades de desenvolvimento frontend e backend.",
  },
  {
    id: 5,
    title: "Redação de Conteúdo",
    description: "Escrevendo conteúdo para sua empresa e negócios.",
  },
  {
    id: 6,
    title: "Marketing Digital",
    description: "Promova seu negócio com nossa equipe de marketing digital.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center py-40" id="service"> {/* Alterado para h-screen e flex */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">O que faço?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Leia Mais</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
