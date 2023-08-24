import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeftLong,
  faDownload,
  faGear,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

import ricohProducts from '../../assets/data/ricoh';
import epsonProducts from '../../assets/data/epson';
import SliderComponent from '../../components/Slider/Slider';
import { themes } from '../../utils/themes';
import './itemDetail.scss';
import useMediaQuery from '../../hooks/useMediaQuery';

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
    <div className='pt-10 pb-8 bg-gray-100'>
      <div className='flex justify-center items-center'>
        <img className='max-w-[200px]' src={`/${theme}/img/logo/${theme}.svg`} alt={theme} />
      </div>
      <div className='mt-4 p-4 bg-gray-100 shadow-md'>
        <div className='flex lbMax:flex-col lbMax:items-center sb:px-10 justify-between'>
          <div className='lb:w-1/2 lb:max-w-[700px] sb:max-w-[500px] sbMax:max-w-[350px] h-fit'>
            {useMediaQuery(1024) && (
              <div className='mb:text-3xl sb:text-2xl sbMax:text-xl font-semibold mb-4 text-center sbMax:px-2'>
                {item[0].name}
              </div>
            )}
            <SliderComponent slides={item[0].imgs} theme={theme} dots={true} />
            <div className='h-7 bg-white'></div>
          </div>
          <div className='lb:w-[45%] lbMax:max-w-[700px] flex flex-col lbMax:mt-4'>
            {!useMediaQuery(1024) && (
              <div className='text-3xl font-semibold mb-4'>{item[0].name}</div>
            )}
            <ul className='list-disc list-inside '>
              {item[0].description.map((text, index) => (
                <li key={index} className='mb-2'>
                  {text}
                </li>
              ))}
            </ul>
            <button className='h-10 mt-2 self-start sbMax:self-center'>
              <a
                className={`bg-gray-100 hover:bg-${theme}Hover duration-700 border-2 border-${theme} text-${theme} px-4 py-2 
                hover:text-white rounded-lg focus:outline-none`}
                target='_blank'
                href='https://wa.link/xj5bzq'
              >
                Solicitar Cotización
              </a>
            </button>
          </div>
        </div>
        <div className='flex justify-center w-[100%] bg-gray-200 sb:p-10 sbMax:p-3 rounded-md mt-5'>
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
        <div className='w-[100%] mt-4'>
          <div className='flex justify-around items-center'>
            {!useMediaQuery(525) && (
              <button
                className={`bg-${theme} hover:bg-${theme}Hover px-4 py-2 min-h-[40px] text-white rounded-lg focus:outline-none transition-colors`}
                onClick={handleVolver}
              >
                <FontAwesomeIcon icon={faArrowLeftLong} size='lg' />
              </button>
            )}
            <a
              className={`bg-${theme} hover:bg-${theme}Hover px-4 py-2 text-white rounded-lg focus:outline-none transition-colors`}
              target='_blank'
              href={item[0].specs.dataSheet}
            >
              Folleto
              <FontAwesomeIcon icon={faDownload} className='ml-2' />
            </a>
            <a
              className={`bg-${theme} hover:bg-${theme}Hover px-4 py-2 text-white rounded-lg focus:outline-none transition-colors`}
              target='_blank'
              href={item[0].specs.drivers}
            >
              Drivers
              <FontAwesomeIcon icon={faScrewdriverWrench} className='ml-2' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
