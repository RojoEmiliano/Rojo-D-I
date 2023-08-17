import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const ShowMoreButton = ({ theme, onClick }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`vermas flex justify-end items-center px-4 text-white font-regular absolute rounded-md w-[40%] h-8 ${
        theme === 'epson'
          ? 'bg-epson hover:bg-epson/[.8]'
          : theme === 'ricoh'
          ? 'bg-rojo hover:bg-rojo/[.8]'
          : ''
      }`}
    >
      <div className='w-[70%] flex justify-between items-center'>
        <span>Ver Más</span>
        <FontAwesomeIcon icon={faCaretRight} />
      </div>
    </button>
  );
};

export default ShowMoreButton;
