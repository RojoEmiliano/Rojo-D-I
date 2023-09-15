import React from 'react';
import './Services.scss';
import { FaTools, FaWpforms, FaWhatsapp } from 'react-icons/fa';
import brother from '../../assets/img/brother.svg';
import epson from '../../assets/img/epson.svg';
import hp from '../../assets/img/hp.svg';
import ricoh from '../../assets/img/ricoh.svg';
import samsung from '../../assets/img/samsung.svg';
import HelmetCommon from '../../commons/HelmetCommon/HelmetCommon';

export const Services = () => {
  return (
    <>
      <HelmetCommon title='ROJO D-I: Servicio Técnico' />
      <div className=''>
        <div className='services bg-no-repeat flex justify-center px-[30%] py-[13%] w-full'>
          <h1 className='text-white bg-black/[.5] text-lg mb:text-xl lb:text-4xl w-fit sbMax:p-3 p-6 rounded-lg text-center'>
            Servicio Técnico
          </h1>
        </div>
        <div className='flex justify-center flex-col items-center   '>
          <div className='pt-4'>
            <h2 className='text-xl font-semibold'>CONOCÉ EL MEJOR SERVICIO TÉCNICO DE MENDOZA</h2>
          </div>
          <div className='p-5'>
            <FaTools className='text-6xl text-ricoh' />
          </div>
          <p className='text-lg w-[80%] pb-4'>
            En Rojo Digitalización e Impresión, nos enorgullece destacarnos por ofrecer un servicio
            técnico ejemplar. Nuestra dedicación a la excelencia y nuestro compromiso con la
            satisfacción del cliente son fundamentales en todo lo que hacemos. Creemos en la buena
            voluntad y la honestidad como pilares de nuestras relaciones comerciales. Estamos aquí
            para ayudarte a alcanzar tus metas y crecer juntos. Te invitamos a explorar nuestros
            servicios y descubrir cómo podemos ser tu aliado de confianza en el mundo de la
            digitalización e impresión
          </p>
        </div>
        <hr className='' />

        <div className='flex flex-col items-center pt-4 '>
          <h2 className='text-lg font-semibold'> Solicita tu servicio vía: </h2>
        </div>
        <div className='flex justify-center p-2 pb-4'>
          <a
            className='flex items-center justify-center bg-ricoh hover:bg-ricohHover px-4 py-2 m-2 text-white rounded-lg focus:outline-none transition-colors '
            href='./contact'
          >
            Formulario
            <FaWpforms className='ml-1' />
          </a>
          <a
            className='flex items-center justify-center bg-ricoh hover:bg-ricohHover px-4 py-2 m-2 text-white rounded-lg focus:outline-none transition-colors '
            href='https://wa.link/xj5bzq'
          >
            Whatsapp
            <FaWhatsapp className='ml-1' />
          </a>
        </div>
        <hr />
        <div className='flex justify-center pt-4'>
          <h4 className='text-lg font-semibold p-2'>Marcas Trabajadas: </h4>
          <div className='flex items-center'></div>
        </div>
        <div className='slider my-4 pb-10'>
          <div className='slide-track'>
            <div className='slide'>
              <img src={epson} alt='epson' />
            </div>
            <div className='slide'>
              <img src={ricoh} alt='ricoh' />
            </div>
            <div className='slide'>
              <img src={samsung} alt='samsung' />
            </div>
            <div className='slide'>
              <img src={brother} alt='brother' />
            </div>
            <div className='slide !w-[200px]'>
              <img src={hp} alt='hp' />
            </div>
            <div className='slide'>
              <img src={epson} alt='epson' />
            </div>
            <div className='slide'>
              <img src={ricoh} alt='ricoh' />
            </div>
            <div className='slide'>
              <img src={samsung} alt='samsung' />
            </div>
            <div className='slide'>
              <img src={brother} alt='brother' />
            </div>
            <div className='slide !w-[200px]'>
              <img src={hp} alt='hp' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
