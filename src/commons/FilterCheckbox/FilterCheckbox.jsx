import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './filterCheckbox.scss';
import { themes } from '../../utils/themes';
import { checkFilter } from '../../utils/checkFilter';

const FilterCheckbox = ({ setState, label, name, theme, filter }) => {
  const isFiltering = checkFilter(filter, name) 

  return (
    <label
      htmlFor={name}
      className='checkbox flex items-center justify-between w-full cursor-pointer'
    >
      {label}
      <input
        className='cursor-pointer hidden'
        type='checkbox'
        name={name}
        id={name}
        onChange={setState}
        checked={isFiltering}
      />
      <span
        className={`checkmarkContainer_${theme} h-6 w-6 rounded-lg flex items-center justify-center transition-all`}
      >
        <span className='checkmark'>
          <FontAwesomeIcon icon={faCheck} className={`${theme === themes.epson ? 'text-epson' : 'text-ricoh'}`} />
        </span>
      </span>
    </label>
  );
};

export default FilterCheckbox;
