import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import arrow from '../../assets/img/down-arrow.png';
import brother from '../../assets/img/brother.svg';
import contact from '../../assets/img/booking.png';
import epson from '../../assets/img/epson.jpg';
import epsonsvg from '../../assets/img/epson.svg';
import hp from '../../assets/img/hp.svg';
import portadaepson from '../../assets/img/portadaepson.jpg';
import portadaricoh from '../../assets/img/portadaricoh.jpg';
import ricoh from '../../assets/img/ricoh.jpg';
import ricohsvg from '../../assets/img/ricoh.svg';
import samsung from '../../assets/img/samsung.svg';
import servicioTecnico from '../../assets/img/customer-support.png';
import sobre from '../../assets/img/people.png';
import wsp from '../../assets/img/whatsapp.png';
import IndexCard from '../../components/IndexCard/IndexCard';
import HelmetCommon from '../../commons/HelmetCommon/HelmetCommon';
import useMediaQuery from '../../hooks/useMediaQuery';

function Index() {
  const seccion = useRef();
  const scrollToSeccion = () => {
    seccion.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HelmetCommon title='ROJO D-I' />
      <div className='flex flex-col w-full h-full'>
        <div className='fixed icono right-4 bottom-2 icon z-40 w-[7vh]'>
          <a className='' href='https://wa.link/xj5bzq' target='_blank'>
            <img src={wsp} alt='wsp' />
          </a>
        </div>
        {/* -------------------------PORTADA------------------------------------------------- */}
        <div className='videoContainer w-full'>
          <div className='w-full h-full relative'>
            {useMediaQuery(1024) ? (
              <img className='video w-full' src='/vid/gifIndex.gif'></img>
            ) : (
              <video
                className='video w-full'
                autoPlay='autoplay'
                loop='loop'
                muted
                playsInline
                preload='auto'
              >
                <source src='/vid/vidIndex.mp4' type='video/mp4' />
              </video>
            )}
            <button
              onClick={scrollToSeccion}
              className='absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white'
            >
              <div className='lbMax:hidden border-2 border-solid bg-white border-white mt-3 rounded-full w-12 h-12 cursor-pointer animate-bounce text-white'>
                <img src={arrow} alt='arrow' className='h-12 relative z-10 text-white ' />
              </div>
            </button>
          </div>
        </div>
        {/* ---------------------------------SERVICIOS-------------------------------------------- */}
        <div ref={seccion} className='flex flex-col w-full p-8 mb:p-16 bg-slate-50 h-90'>
          <h2 className='lb:text-3xl text-xl italic text-center mb-5'>
            Nuestro Enfoque y Servicios
          </h2>
          <div className='flex items-center justify-around gap-4 flex-wrap w-full'>
            <IndexCard
              link='/services'
              img={servicioTecnico}
              title='Servicio Técnico'
              text='Expertos en resolver problemas y mantener tus dispositivos en óptimas condiciones.'
            />
            <IndexCard
              link='/about'
              img={sobre}
              title='Sobre Nosotros'
              text='Conoce nuestra historia y los valores que nos impulsan en Rojo.'
            />
            <IndexCard
              link='/contact'
              img={contact}
              title='Contáctanos'
              text='¿Tienes preguntas o necesitas asistencia? Estamos aquí para ayudarte.'
            />
          </div>
          {/* -------------------------PORTADA------------------------------------------------- */}
          <div className='videoContainer w-full'>
            <div className='w-full h-full relative'>
              {!useMediaQuery(1024) ? (
                <video
                  className='video w-full'
                  autoPlay='autoplay'
                  loop='loop'
                  muted
                  playsInline
                  preload='auto'
                >
                  <source src='/vid/vidIndex.mp4' type='video/mp4' />
                </video>
              ) : (
                <img className='video w-full' src='/vid/gifIndex2.gif'></img>
              )}
              <button
                onClick={scrollToSeccion}
                className='absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white'
              >
                <div className='lbMax:hidden border-2 border-solid bg-white border-white mt-3 rounded-full w-12 h-12 cursor-pointer animate-bounce text-white'>
                  <img src={arrow} alt='arrow' className='h-12 relative z-10 text-white ' />
                </div>
              </button>
            </div>
          </div>
          {/* ---------------------------------SERVICIOS-------------------------------------------- */}
          <div ref={seccion} className='flex flex-col w-full p-8 mb:p-16 bg-slate-50 h-90'>
            <h2 className='lb:text-3xl text-xl italic text-center mb-5'>
              Nuestro Enfoque y Servicios
            </h2>
            <div className='flex items-center justify-around gap-4 flex-wrap w-full'>
              <IndexCard
                link='/services'
                img={servicioTecnico}
                title='Servicio Técnico'
                text='Expertos en resolver problemas y mantener tus dispositivos en óptimas condiciones.'
              />
              <IndexCard
                link='/about'
                img={sobre}
                title='Sobre Nosotros'
                text='Conoce nuestra historia y los valores que nos impulsan en Rojo.'
              />
              <IndexCard
                link='/contact'
                img={contact}
                title='Contáctanos'
                text='¿Tienes preguntas o necesitas asistencia? Estamos aquí para ayudarte.'
              />
            </div>
          </div>
          <div className='flex lbMax:py-8 lbMax:px-5 lb:p-2 items-center lbMax:flex-col'>
            <div className='flex flex-col items-center lb:hidden mb-4'>
              <img src={epson} className='w-40' />
            </div>
            <div className='lb:w-1/2'>
              <img src={portadaepson} className='rounded-lg drop-shadow-2xl w-full' />
            </div>
            <div className='place-items-center lb:w-1/2 justify-center items-center'>
              <div className='flex flex-col items-center lbMax:hidden'>
                <img src={epson} className='w-40' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='p-6 lb:px-20 text-lg mb:text-xl text-justify max-w-[690px]'>
                  Epson es una reconocida marca global en tecnología de impresión, conocida por su
                  compromiso con la innovación y la calidad en el mundo de las impresoras y las
                  tintas. Con décadas de experiencia, Epson se ha destacado por ofrecer soluciones
                  de impresión de alta calidad para hogares y empresas.
                </p>
                <Link to='/epson' className='buttonEpson'>
                  VER PRODUCTOS
                </Link>
              </div>
            </div>
          </div>
          <div className='flex lb:flex-row-reverse lbMax:py-8 lbMax:px-5 lb:p-2 items-center lbMax:flex-col'>
            <div className='flex flex-col items-center lb:hidden mb-4'>
              <img src={ricoh} className='w-40' />
            </div>
            <div className='lb:w-1/2 lbMax:max-w-[690px]'>
              <img src={portadaricoh} className='rounded-lg drop-shadow-2xl' />
            </div>
            <div className='place-items-center lb:w-1/2 justify-center items-center'>
              <div className='flex flex-col items-center lbMax:hidden'>
                <img src={ricoh} className='w-40' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='p-6 lb:px-20 text-lg mb:text-xl text-justify max-w-[690px]'>
                  Ricoh es una destacada empresa global en tecnología de impresión y soluciones de
                  oficina. Reconocida por su enfoque en la innovación y la eficiencia, Ricoh ofrece
                  una amplia gama de impresoras y tintas diseñadas para satisfacer las necesidades
                  tanto de empresas como de usuarios individuales.
                </p>
                <Link to='/ricoh' className='buttonRicoh'>
                  VER PRODUCTOS
                </Link>
              </div>
            </div>
          </div>
          {/* ---------------------------------MARCAS-------------------------------------------- */}
          <div className='flex flex-col w-full pt-8  h-90 flex-wrap'>
            <h2 className='lb:text-3xl text-xl italic text-center'>
              Marcas de Confianza en Nuestro Trabajo
            </h2>
          </div>
          <div className='slider my-4'>
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
      </div>
    </>
  );
}

export default Index;
