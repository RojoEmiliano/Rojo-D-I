import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

import ricohProducts from '../../assets/data/ricoh';
import epsonProducts from '../../assets/data/epson';
import SliderComponent from '../../components/Slider/Slider';
import { themes } from '../../utils/themes';
import './itemDetail.scss';

const ItemDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { modelCode } = useParams();

  const [theme, setTheme] = useState('');
  const [item, setItem] = useState(() => {
    if (location.pathname.includes('ricoh')) {
      return ricohProducts.filter(product => product.specs.modelCode === modelCode);
    } else if (location.pathname.includes('epson')) {
      return epsonProducts.filter(product => product.specs.modelCode === modelCode);
    }
  });

  const handleVolver = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (location.pathname.includes('ricoh')) {
      setTheme(themes.ricoh);
    } else if (location.pathname.includes('epson')) {
      setTheme(themes.epson);
    }
  }, []);

  return (
    <div className='py-8 bg-gray-100'>
      <div className='flex justify-center items-center'>
        <img className='max-w-[10%]' src={`/${theme}/img/logo/${theme}.svg`} alt={theme} />
      </div>
      <div className=' mx-auto p-4 bg-gray-100 shadow-md '>
        <div className='grid grid-cols-2 pl-10'>
          <div className='max-w-[85%]  mb-6'>
            <SliderComponent slides={item[0].imgs} theme={theme} />
          </div>
          <div className='py-4 pl-[10%]'>
            <div className='text-3xl font-semibold mb-4'>{item[0].name}</div>
            <ul className='list-disc list-inside '>
              {item[0].description.map((text, index) => (
                <li key={index} className='mb-2'>
                  {text}
                </li>
              ))}
            </ul>
            <div className='m-[2%] '>
            <a
              className={`${
                theme === themes.ricoh
                  ? '  bg-gray-100  hover:bg-ricoh duration-700 border-2 border-ricoh text-ricoh '
                  : theme === themes.epson
                  ? 'bg-gray-100 hover:bg-epson duration-700 border-2 border-epson text-epson '
                  : ''
              } mt-4 px-4 py-2 hover:text-white   rounded-lg  focus:outline-none`}
              target='_blank'
              href='https://wa.link/xj5bzq'
            >
              Solicitar Cotización
            </a>
            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-center w-[100%] bg-gray-200 p-10 rounded-md'>
            <Accordion className='w-[100%]' defaultActiveKey='0'>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>Más Características</Accordion.Header>
                <Accordion.Body>
                  <div className='py-4'>
                    <p className='mb-2 font-bold'>Impresión:</p>
                    <li>
                      <span className='font-semibold'>Tecnología de Impresión:</span>{' '}
                      {item[0].specs.print.printTec}
                    </li>
                    <li>
                      <span className='font-semibold'>Resolución Máxima de Impresión:</span>{' '}
                      {item[0].specs.print.maxRes}
                    </li>
                    <li>
                      <span className='font-semibold'>Velocidad Máxima de Impresión:</span>{' '}
                      {item[0].specs.print.maxPrintSpeed}
                    </li>
                  </div>
                  <hr />

                  <div className='py-4'>
                    <p className='mb-2 font-bold'>General:</p>
                    <li>
                      <span className='font-semibold'>Sistemas Operativos:</span>{' '}
                      {item[0].specs.general.os}
                    </li>
                    <li>
                      <span className='font-semibold'>Tamaño:</span> {item[0].specs.general.size}
                    </li>
                    <li>
                      <span className='font-semibold'>Peso:</span> {item[0].specs.general.weight}
                    </li>
                    <li>
                      <span className='font-semibold'>Origen:</span> {item[0].specs.general.origin}
                    </li>
                  </div>

                  <hr />

                  <div className='py-4'>
                    <p className='mb-2 font-bold'>Conectividad:</p>
                    <li>
                      <span className='font-semibold'>Puertos:</span>{' '}
                      {item[0].specs.conectivity.standarConectivity}
                    </li>
                    <li>
                      <span className='font-semibold'>Protocolos de Red:</span>{' '}
                      {item[0].specs.conectivity.netProtocols}
                    </li>
                  </div>

                  <hr />

                  <div className='py-4'>
                    <p className='mb-2 font-bold'>Manejo de Papel</p>
                    <li>
                      <span className='font-semibold'>Tamaños de Papel:</span>{' '}
                      {item[0].specs.paperHandling.paperSize}
                    </li>
                    <li>
                      <span className='font-semibold'>Tipos de Papel:</span>{' '}
                      {item[0].specs.paperHandling.paperType}
                    </li>
                    <li>
                      <span className='font-semibold'>Gramajes:</span>{' '}
                      {item[0].specs.paperHandling.paperWeight}
                    </li>
                    <li>
                      <span className='font-semibold'>Capacidad de entrada:</span>{' '}
                      {item[0].specs.paperHandling.paperEntryCapacity}
                    </li>
                    <li>
                      <span className='font-semibold'>Capacidad de salida:</span>{' '}
                      {item[0].specs.paperHandling.paperOutCapacity}
                    </li>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className='w-[100%]'>
          <div className='flex justify-around items-center '>
            <button
              className={`${
                theme === 'ricoh'
                  ? 'bg-ricoh hover:bg-ricohHover'
                  : theme === 'epson'
                  ? 'bg-epson hover:bg-epsonHover'
                  : ''
              } mt-4 px-4 py-2  text-white rounded-lg  focus:outline-none`}
              onClick={handleVolver}
            >
              
              <FaArrowLeftLong />
            </button>
            <a
              className={`${
                theme === themes.ricoh
                  ? 'bg-ricoh hover:bg-ricohHover'
                  : theme === themes.epson
                  ? 'bg-epson hover:bg-epsonHover'
                  : ''
              } mt-4 px-4 py-2  text-white rounded-lg  focus:outline-none`}
              target='_blank'
              href={item[0].specs.dataSheet}
            >
              Descargar Folleto
            </a>
            <a
              className={`${
                theme === themes.ricoh
                  ? 'bg-ricoh hover:bg-ricohHover'
                  : theme === themes.epson
                  ? 'bg-epson hover:bg-epsonHover'
                  : ''
              } mt-4 px-4 py-2  text-white rounded-lg  focus:outline-none`}
              target='_blank'
              href={item[0].specs.drivers}
            >
              Drivers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
