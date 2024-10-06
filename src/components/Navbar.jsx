import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>William</div>
        <div className='space-x-6'>
          <Link to="/" className='hover:text-gray-400'>Home</Link>
          <Link to="/sobre" className='hover:text-gray-400'>Sobre mim</Link>
          <Link to="/servicos" className='hover:text-gray-400'>Serviços</Link>
          <Link to="/projetos" className='hover:text-gray-400'>Projetos</Link>
          <Link to="/contato" className='hover:text-gray-400'>Contatos</Link>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Conecte-me</button>
      </div>
    </nav>
  );
}

export default Navbar;
