import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navBar.scss';
import { themes } from '../../utils/themes';
import logo from '../../assets/img/logoindex.jpg';
import useMediaQuery from '../../hooks/useMediaQuery';
import Hamburger from './Hamburger';

const NavBar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState('');
  const [scrolledDown, setScrolledDown] = useState(false);

  const links = [
    {
      text: 'INICIO',
      route: '/',
    },
    {
      text: 'RICOH',
      route: '/ricoh',
    },
    {
      text: 'EPSON',
      route: '/epson',
    },
    {
      text: 'SERVICIOS',
      route: '/services',
    },
    {
      text: 'SOBRE NOSOTROS',
      route: '/about',
    },
    {
      text: 'CONTACTO',
      route: '/contact',
    },
  ];

  useEffect(() => {
    if (location.pathname.includes('ricoh')) {
      setTheme(themes.ricoh);
    } else if (location.pathname.includes('epson')) {
      setTheme(themes.epson);
    } else if (location.pathname.includes('about')) {
      setTheme(themes.about);
    } else if (location.pathname.includes('contact')) {
      setTheme(themes.contact);
    } else if (location.pathname.includes('services')) {
      setTheme(themes.services);
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
      {useMediaQuery(1024) ? (
        <>
          <div className='h-[70px]'></div>
          <nav
            className='fixed top-0 flex justify-between items-center w-full h-[70px] px-2.5 
          bg-white shadow-z z-40'
          >
            <Link to='/'>
              <img className='w-[150px] lg:ml-2' src={logo} />
            </Link>
            <Hamburger links={links} theme={theme} />
          </nav>
        </>
      ) : (
        <>
          <div className='h-[117px] w-full'></div>
          <nav
            className={`flex justify-between items-center py-0 px-2.5 shadow-z fixed top-0 z-50 w-full 
            bg-white ${scrolledDown ? 'shrunk' : ''} navbar`}
          >
            <Link to='/'>
              <img className='w-[250px] lg:ml-2' src={logo} />
            </Link>
            <div
              className='font-semibold text-md w-2/3 flex justify-around items-center xl:pr-10 
              itemsContainer'
            >
              {links.map(link => {
                return (
                  <Link
                    key={link.text}
                    className={`focus:outline-none px-4 min-w-[100px] py-2 h-full flex items-center 
                    justify-center navItem text-lg ${
                      theme === link.route.split('/')[1] ? 'current' : ''
                    }`}
                    to={link.route}
                  >
                    {link.text}
                  </Link>
                );
              })}
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default NavBar;
