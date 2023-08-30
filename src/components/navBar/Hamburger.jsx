import React, { useState } from 'react';

import './hamburger.scss';
import { Link } from 'react-router-dom';

const Hamburger = ({ links, theme }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={`${active ? 'active' : ''} cursor-pointer static z-50`}
        onClick={() => setActive(!active)}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 200 200'>
          <g strokeWidth='6.5' strokeLinecap='round'>
            <path d='M72 82.286h28.75' fill='#009100' fillRule='evenodd' stroke='#000' />
            <path
              d='M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554'
              fill='none'
              stroke='#000'
            />
            <path d='M72 125.143h28.75' fill='#009100' fillRule='evenodd' stroke='#000' />
            <path
              d='M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554'
              fill='none'
              stroke='#000'
            />
            <path d='M100.75 82.286h28.75' fill='#009100' fillRule='evenodd' stroke='#000' />
            <path d='M100.75 125.143h28.75' fill='#009100' fillRule='evenodd' stroke='#000' />
          </g>
        </svg>
      </div>
      {active && (
        <button
          onClick={() => setActive(false)}
          className='inset-0 w-full h-full cursor-default fixed 
        z-40 bg-black/[.5]'
        ></button>
      )}
      <div
        className={`menu bg-white/[.92] flex flex-col w-64 h-full pt-[70px] gap-3 font-medium
      ${active ? 'translate-x-0 shadow-y' : 'translate-x-full'}`}
      >
        {links.map(link => {
          return (
            <Link
              onClick={() => setActive(false)}
              key={link.text}
              className={`focus:outline-none px-6 w-full py-2 text-center text-lg
              ${theme === link.route.split('/')[1] && 'bg-ricoh text-white'}`}
              to={link.route}
            >
              {link.text}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Hamburger;
