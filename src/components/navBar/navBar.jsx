import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss';
import logo from '../../assets/img/logoindex.jpg'

function NavBar() {
  return (


    <header className="header">
      <div className='headerContainer'>
        <div>
          <Link to="/"><img className='headerLogo' src={logo}/></Link>
        </div>
        <div className='headerItems'>
          <Link className='headerItem' to="/">INICIO</Link>
          <Link className='headerItem' to="/ricoh">RICOH</Link>
          <Link className='headerItem' to="/epson">EPSON</Link>
          <Link className='headerItem' to="/about">SOBRE NOSOTROS</Link>
          <Link className='headerItem' to="/contact">CONTACTO</Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
