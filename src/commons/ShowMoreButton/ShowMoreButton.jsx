import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const ShowMoreButton = ({ theme, modelCode, brand }) => {
  return (
    <Link
      to={`/${brand}/detail/${modelCode}`}
      className={`lbMax:!bottom-5 lbMax:!z-10 vermas flex justify-end items-center text-white font-regular absolute rounded-md 
      sbMax:w-[50%] sbMax:px-3 sb:w-[40%] sb:px-4 h-8 bg-${theme} hover:bg-${theme}Hover`}
    >
      <div className='w-[70%] flex justify-between items-center'>
        <span>Ver Más</span>
        <FontAwesomeIcon icon={faCaretRight} />
      </div>
    </Link>
  );
};

export default ShowMoreButton;
