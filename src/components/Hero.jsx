import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/aboutme-image.jpeg';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center flex flex-col py-60 justify-center items-center'>
      <img 
        src={HeroImage} 
        alt="Mohammad Yousof"
        className='mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        Eu sou {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          William Feng
        </span>
        , Desenvolvedor Full-Stack
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        Eu me especializo em construir aplicações web modernas e responsivas.
      </p>
      <div className='mt-8 space-x-4'>
        <Link to="/contato">
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Entre em Contato
          </button>
        </Link>
        <Link to="/sobre">
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Sobre mim
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
