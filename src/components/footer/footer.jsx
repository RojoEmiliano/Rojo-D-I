import React from 'react';
import './footer.scss';
import {Navigate, Link} from 'react-router-dom'
import {FaWhatsapp, FaMailBulk, FaMapMarkerAlt} from 'react-icons/fa'
import logoindex from '../../assets/img/logoindex.jpg'



function Footer() {
  return (
    <footer className='footer'>
      <div className='nav'>
        <img src={logoindex} />
      </div>

      <div className='copy'>

        <p>Todos los derechos reservados © {new Date().getFullYear()}</p>
      </div>

      <div className='comunicacion'>
        <a href="https://wa.link/xj5bzq" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className='iconowsp'/>Escribinos!
        </a>
        <p><FaMailBulk className='icono'/> gustavomrojo1@gmail.com</p>
        <p><FaMapMarkerAlt className='icono'/> Juan A. Maza 714, Esquina O'higgins.</p>
      </div>


    </footer>
  );
}

export default Footer;
