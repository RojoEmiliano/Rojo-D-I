import React, { useState } from 'react';
import {
  faF,
  faFilter,
  faI,
  faL,
  faO,
  faR,
  faS,
  faT,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FilterCheckbox from '../../commons/FilterCheckbox/FilterCheckbox';

const MobileFilter = ({ checkboxOnChange, theme, filter }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='flex mt-3 ml-2 w-[120px] justify-between items-center bg-gray-200 rounded-md p-2.5'
      >
        <div className='flex justify-between w-[70%]'>
          <FontAwesomeIcon icon={faF} size='xs' />
          <FontAwesomeIcon icon={faI} size='xs' />
          <FontAwesomeIcon icon={faL} size='xs' />
          <FontAwesomeIcon icon={faT} size='xs' />
          <FontAwesomeIcon icon={faR} size='xs' />
          <FontAwesomeIcon icon={faO} size='xs' />
          <FontAwesomeIcon icon={faS} size='xs' />
        </div>
        <FontAwesomeIcon icon={faFilter} size='sm' />
      </button>
      {open ? (
        <>
          <div className='fixed inset-0 bg-black/[.75] z-50' onClick={() => setOpen(false)} />
          <div
            className='fixed z-50 left-1/2 top-1/3 -translate-x-1/2 bg-slate-50 p-4 rounded-md 
          flex flex-col border-3 
          border-gray-300 min-w-[320px]'
          >
            <div className='flex flex-col gap-1 text-md w-full'>
              <FilterCheckbox
                setState={checkboxOnChange}
                label='Impresoras Monocromáticas'
                name='iByN'
                theme={theme}
                filter={filter}
              />
              <FilterCheckbox
                setState={checkboxOnChange}
                label='Impresoras Color'
                name='iColor'
                theme={theme}
                filter={filter}
              />
              <hr className='my-2' />
              <FilterCheckbox
                setState={checkboxOnChange}
                label='Multifunción Monocromáticas'
                name='mByN'
                theme={theme}
                filter={filter}
              />
              <FilterCheckbox
                setState={checkboxOnChange}
                label='Multifunción Color'
                name='mColor'
                theme={theme}
                filter={filter}
              />
            </div>
            <button
              onClick={() => setOpen(false)}
              className={`h-8 bg-${theme} hover:bg-${theme}Hover font-medium text-white rounded-md 
              px-5 w-fit self-center mt-4 transition-colors`}
            >
              Aceptar
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default MobileFilter;
