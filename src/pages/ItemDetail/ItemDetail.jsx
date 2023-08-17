import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

import ricohProducts from '../../assets/data/ricoh';
import epsonProducts from '../../assets/data/epson';
import SliderComponent from '../../components/Slider/Slider';
import { themes } from '../../utils/themes';

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
    <div className='bg-gray-100 min-h-screen py-8'>
      <div className='max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg'>
        <div className='text-xl font-semibold mb-4'>{item[0].name}</div>
        <div className='max-w-md mx-auto mb-6'>
          <SliderComponent slides={item[0].imgs} theme={theme} />
        </div>
        <hr />
        <div className='py-4'>
          <p className='mb-2 font-bold'>Descripción:</p>
          <ul className='list-disc list-inside'>
            {item[0].description.map((text, index) => (
              <li key={index} className='mb-2'>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div>
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
              <span className='font-semibold'>Sistemas Operativos:</span> {item[0].specs.general.os}
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
        </div>

        <hr />
        <div className='w-[60%]'>
          <div className='flex justify-between items-center '>
            <button
              className={`${
                theme === 'ricoh'
                  ? 'bg-rojo hover:bg-rojo/[0.9] '
                  : theme === 'epson'
                  ? 'bg-epson hover:bg-epson/[0.9]'
                  : ''
              } mt-4 px-4 py-2  text-white rounded-lg  focus:outline-none`}
              onClick={handleVolver}
            >
              Volver
            </button>
            <a
              className={`${
                theme === themes.ricoh
                  ? 'bg-rojo hover:bg-rojo/[0.9] '
                  : theme === themes.epson
                  ? 'bg-epson hover:bg-epson/[0.9]'
                  : ''
              } mt-4 px-4 py-2  text-white rounded-lg  focus:outline-none`}
              target='_blank'
              href={item[0].specs.dataSheet}
            >
              Descargar Folleto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
