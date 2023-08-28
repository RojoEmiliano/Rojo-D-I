import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navBar.scss';
import { themes } from '../../utils/themes';
import logo from '../../assets/img/logoindex.jpg';
import useMediaQuery from '../../hooks/useMediaQuery';

const NavBar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState('');
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('ricoh')) {
      setTheme(themes.ricoh);
    } else if (location.pathname.includes('epson')) {
      setTheme(themes.epson);
    } else if (location.pathname.includes('about')) {
      setTheme(themes.about);
    } else if (location.pathname.includes('contact')) {
      setTheme(themes.contact);
    } else {
      setTheme(themes.inicio);
    }
  }, [location.pathname]);

  window.onscroll = function () {
    if (window.scrollY > 100) setScrolledDown(true);
    else setScrolledDown(false);
  };

  return (
    <>
      <div className='h-[117px]'></div>
      <nav
        className={`flex justify-between items-center py-0 px-2.5 shadow-z fixed z-50 w-full bg-white
      ${scrolledDown ? 'shrunk' : ''} navbar`}
      >
        <Link to='/'>
          <img className='w-[250px] lg:ml-2' src={logo} />
        </Link>
        <div className='font-semibold text-md w-2/3 flex justify-around items-center xl:pr-10 itemsContainer'>
          <Link
            className={`focus:outline-none px-4 min-w-[100px] py-2 h-full flex items-center justify-center navItem topLine text-lg`}
            to='/'
          >
            INICIO
          </Link>
          <Link
            className={`focus:outline-none px-4 w-max py-2 h-full flex items-center navItem topLine`}
            to='/ricoh'
          >
            RICOH
          </Link>
          <Link
            className={`focus:outline-none px-4 w-max py-2 h-full flex items-center navItem topLine`}
            to='/epson'
          >
            EPSON
          </Link>
          <Link
            className={`focus:outline-none px-4 w-max py-2 h-full flex items-center navItem topLine`}
            to='/about'
          >
            SOBRE NOSOTROS
          </Link>
          <Link
            className={`focus:outline-none px-4 w-max py-2 h-full flex items-center navItem topLine`}
            to='/contact'
          >
            CONTACTO
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
