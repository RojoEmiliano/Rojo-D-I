import React from 'react';
import './footer.scss';
import { FaWhatsapp, FaMailBulk, FaMapMarkerAlt } from 'react-icons/fa';
import logoindex from '../../assets/img/logoindex.jpg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='nav'>
        <img src={logoindex} alt='Logo' />
      </div>

      <div className='copy'>
                  {/* Agrega el mapa de Google Maps usando un iframe */}
                  <iframe
            title='Mapa'
            width='250'
            height='150'
            frameborder='0'
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.607984975702!2d-68.8542291226524!3d-32.92249623211729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967df59cdd0d1bb9%3A0x4cda9768283b5271!2sJuan%20A.%20Maza%20714%2C%20M5501%20Godoy%20Cruz%2C%20Mendoza!5e0!3m2!1sen!2sar!4v1564625305092!5m2!1sen!2sar`}
            allowfullscreen
          ></iframe>
        <p>Todos los derechos reservados © {new Date().getFullYear()}</p>
      </div>

      <div className='comunicacion'>
        <a href='https://wa.link/xj5bzq' target='_blank' rel='noopener noreferrer'>
          <FaWhatsapp className='iconowsp' />Escribinos!
        </a>
        <p>
          <FaMailBulk className='icono' /> gustavomrojo1@gmail.com
        </p>
        <div>
          <FaMapMarkerAlt className='icono' /> Juan A. Maza 714, Esquina O'higgins.
          <br />

        </div>
      </div>
    </footer>
  );
}

export default Footer;
