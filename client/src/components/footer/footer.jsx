import React from 'react';
import { FaWhatsapp, FaMailBulk, FaMapMarkerAlt } from 'react-icons/fa';

import logoindex from '../../assets/img/logoindex.jpg';

function Footer({ loading }) {
  return (
    <footer
      className={`flex flex-col w-full px-10 pt-2.5 lb:h-[210px] ${
        loading ? 'absolute' : 'static'
      } bottom-0`}
    >
      <div className='flex lbMax:flex-col-reverse w-full justify-between items-center'>
        <img src={logoindex} alt='Logo' className='lbMax:hidden w-1/4 max-w-[300px]' />
        <div className='copy lbMax:w-full lb:w-1/4 h-full mbMax:hidden'>
          {/* Agrega el mapa de Google Maps usando un iframe */}
          <iframe
            title='Map'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.607984975702!2d-68.8542291226524!3d-32.92249623211729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967df59cdd0d1bb9%3A0x4cda9768283b5271!2sJuan%20A.%20Maza%20714%2C%20M5501%20Godoy%20Cruz%2C%20Mendoza!5e0!3m2!1sen!2sar!4v1564625305092!5m2!1sen!2sar`}
          ></iframe>
        </div>
        <div
          className='lbMax:flex lbMax:justify-between lbMax:w-full lbMax:mb-3 lb:w-1/4 lb:h-full
        mbMax:flex-col items-center'
        >
          <img src={logoindex} alt='Logo' className='lb:hidden max-w-[250px]' />
          <div className='mb:hidden mt-4 w-full'>
            <iframe
              title='Map'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.607984975702!2d-68.8542291226524!3d-32.92249623211729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967df59cdd0d1bb9%3A0x4cda9768283b5271!2sJuan%20A.%20Maza%20714%2C%20M5501%20Godoy%20Cruz%2C%20Mendoza!5e0!3m2!1sen!2sar!4v1564625305092!5m2!1sen!2sar`}
            ></iframe>
          </div>
          <div className='comunicacion lb:w-full flex justify-center h-full mbMax:mt-4'>
            <div className='h-full flex flex-col justify-evenly'>
              <a
                href='https://wa.link/xj5bzq'
                target='_blank'
                rel='noopener noreferrer'
                className='flex gap-2.5 font-medium text-lg'
              >
                <FaWhatsapp className='text-[#25d336]' />
                +54 9 261 653-0572
              </a>
              <p className='flex gap-2.5 font-medium text-lg'>
                <FaMailBulk className='icono' /> gustavomrojo1@gmail.com
              </p>
              <div className='flex gap-2.5 font-medium text-lg'>
                <FaMapMarkerAlt className='text-[#e4473b]' /> Juan A. Maza 714, Esquina O'higgins.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='h-[56px] lb:w-1/4 max-w-[300px]'></div>
        <p className='py-3 text-center lb:w-1/4 lbMax:w-full'>
          Todos los derechos reservados © {new Date().getFullYear()}
        </p>
        <div className='h-[56px] lb:w-1/4'></div>
      </div>
    </footer>
  );
}

export default Footer;
