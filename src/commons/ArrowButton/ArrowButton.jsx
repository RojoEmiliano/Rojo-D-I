import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ArrowButton = ({ theme, orientation, onClick }) => {
  const classTheme = `${
    theme === 'epson' ? 'hover:bg-epson' : theme === 'ricoh' ? 'hover:bg-rojo' : ''
  }`;

  return (
    <button
      onClick={onClick}
      className={`arrowButton absolute top-[50%] z-10 border rounded-xl border-white transition-all p-2 ${classTheme} ${orientation}`}
    >
      <FontAwesomeIcon
        className={`arrow hover:text-white transition-all`}
        size='xl'
        icon={
          orientation.includes('left')
            ? faArrowLeft
            : orientation.includes('right')
            ? faArrowRight
            : null
        }
      />
    </button>
  );
};

export default ArrowButton;