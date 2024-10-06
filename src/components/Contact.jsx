import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Print form data to console
    console.log(formData);
  };

  return (
    <div className="bg-black text-white flex flex-col py-40 justify-center" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Vamos Conversar</h3>
            <p>Estou aberto a discutir projetos de desenvolvimento web ou oportunidades de parceria.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:youremail@example.com" className='hover:underline'>
                    233william233@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+9828839922</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>São Paulo, Brasil</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className='block mb-2'>Seu Nome</label>
                    <input 
                      type="text" 
                      id="name" // Adicionando o id
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400'
                      placeholder='Digite Seu Nome'
                      required
                    />
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input 
                      type="email" 
                      id="email" // Adicionando o id
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400'
                      placeholder='Digite Seu Email'
                      required
                    />
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Mensagem</label>
                    <textarea 
                      id="message" // Adicionando o id
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400'
                      rows="5"
                      placeholder='Digite Sua Mensagem'
                      required
                    ></textarea>
                </div>
                <button 
                  type="submit"
                  className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
                >
                  Enviar
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact
