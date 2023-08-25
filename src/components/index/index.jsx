import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import React from 'react'
import arrow from '../../assets/img/down-arrow.png'
import brother from '../../assets/img/brother.svg'
import contact from '../../assets/img/booking.png'
import epson from '../../assets/img/epson.jpg'
import epsonsvg from '../../assets/img/epson.svg'
import hp from '../../assets/img/hp.svg'
import portadaepson from '../../assets/img/portadaepson.jpg'
import portadaricoh from '../../assets/img/portadaricoh.jpg'
import ricoh from '../../assets/img/ricoh.jpg'
import ricohsvg from '../../assets/img/ricoh.svg'
import samsung from '../../assets/img/samsung.svg'
import servicioTecnico from '../../assets/img/customer-support.png'
import sobre from '../../assets/img/people.png'
import wsp from '../../assets/img/whatsapp.png'

function Index() {

    

  return (
    <div className='flex flex-col  w-full h-full '>
      <div className='fixed icono right-0 bottom-0 m-3 icon'>
      <a href='https://wa.link/xj5bzq' target='_blank'><img src={wsp} alt='wsp'/></a>
      </div>
    {/* -------------------------PORTADA------------------------------------------------- */}
    <div class="index flex flex-col text-center text-5xl italic justify-center gap-y-4 content-center w-full flex-wrap place-items-center">
      <h2 class="text-black font-normal mt-2 text-5xl">EXPERTOS EN DIGITALIZACIÓN E IMPRESIÓN</h2>
      <a href='#seccion1'>
        <div class="border-2 border-solid border-white-500 mt-3 rounded-full w-12 h-12 absolute cursor-pointer w-max relative animate-bounce">
          <img src={arrow} alt="arrow" class="h-12 relative z-10" />
        </div>
      </a>

    </div>

      <div id='seccion1' className='flex p-2 mt-4 items-center '>
        <div className='w-2/4'> 
          <img src={portadaepson} className='rounded-lg drop-shadow-2xl epson' />
        </div>

        <div className='place-items-center w-2/4 justify-center items-center'>
          <div className='flex flex-col items-center'>
            <img src={epson} className='w-40  '/>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='p-6 text-xl'>Epson es una reconocida marca global en tecnología de impresión, conocida por su compromiso con la innovación y la calidad en el mundo de las impresoras y las tintas. Con décadas de experiencia, Epson se ha destacado por ofrecer soluciones de impresión de alta calidad para hogares y empresas.</p>
            <Link to='/epson'>
              <button className='buttonEpson'>VER PRODUCTOS</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-row-reverse p-2 items-center '>
        <div className='w-2/4'> 
          <img src={portadaricoh} className='rounded-lg drop-shadow-2xl ricoh' />
        </div>

        <div className='place-items-center w-2/4 justify-center items-center'>
          <div className='flex flex-col items-center'>
            <img src={ricoh} className='w-40'/>
          </div>
          <div className='flex flex-col items-center'>
            <p className='p-6 text-xl'>Ricoh es una destacada empresa global en tecnología de impresión y soluciones de oficina. Reconocida por su enfoque en la innovación y la eficiencia, Ricoh ofrece una amplia gama de impresoras y tintas diseñadas para satisfacer las necesidades tanto de empresas como de usuarios individuales.</p>
            <Link to='/ricoh'>
              <button className='buttonRicoh'>VER PRODUCTOS</button>
            </Link>
          </div>
        </div>
      </div>
      {/* ---------------------------------SERVICIOS-------------------------------------------- */}
      <div className='flex flex-col w-full p-16 bg-slate-50 h-90'>
          <h2 className='text-3xl italic text-center mb-5  '>Nuestro Enfoque y Servicios</h2>
          <div className='flex flex-row items-center justify-around gap-2 flex-wrap tajetas'>
            <Link to=''>
              <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:-translate-y-2 transition-transform'>
                <img src={servicioTecnico} className='h-20 w-21' />
                <h3 className='text-xl font-semibold mt-2'>Servicio Técnico</h3>
                <p className='text-xl text-gray-500 mt-1 w-96'>
                  Expertos en resolver problemas y mantener tus dispositivos en óptimas condiciones.
                </p>
              </div>
            </Link>

            <Link to='/nosotros'>
              <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:-translate-y-2 transition-transform'>
                <img src={sobre} className='h-20 w-21' />
                <h3 className='text-xl font-semibold mt-2'>Sobre Nosotros</h3>
                <p className='text-xl text-gray-500 mt-1 w-96'>
                  Conoce nuestra historia y los valores que nos impulsan en Rojo.
                </p>
              </div>
            </Link>
            
            <Link to=''>
              <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:-translate-y-2 transition-transform mt-2'>
                <img src={contact} className='h-20 w-21' />
                <h3 className='text-xl font-semibold mt-2'>Contáctanos</h3>
                <p className='text-xl text-gray-500 mt-1 w-96'>
                  ¿Tienes preguntas o necesitas asistencia? Estamos aquí para ayudarte.
                </p>
              </div>
            </Link>
          </div>
        </div>

      {/* ---------------------------------MARCAS-------------------------------------------- */}
      <div className='flex flex-col w-full p-16  h-90 flex-wrap'>
        <h2 className='text-3xl italic text-center  '>Nuestras Asociaciones de Calidad: Marcas de Confianza en Nuestro Trabajo</h2>
        <div className='flex  flex-wrap h-96'>
          

        </div>
      </div>
    </div>
  )
}

export default Index




