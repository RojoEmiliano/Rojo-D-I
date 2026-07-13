import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './arrowButton.scss';
import { themes } from '../../utils/themes';

const ArrowButton = ({ theme, orientation, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`arrowButton absolute top-[50%] z-10 rounded-xl transition-all p-2 ${
        theme === themes.epson ? 'hover:bg-epson' : 'hover:bg-ricoh'
      } ${orientation}`}
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
