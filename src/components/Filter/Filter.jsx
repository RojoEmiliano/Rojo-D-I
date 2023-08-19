import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import FilterCheckbox from '../../commons/FilterCheckbox/FilterCheckbox';
import './filter.scss';

const Filter = ({ checkboxOnChange, theme }) => {
  return (
    <div className='filter bg-slate-200 fixed w-[300px] -ml-[300px] left-0 top-[168px] z-20 p-3.5 rounded-md rounded-tr-none hover:ml-0 shadow-lg'>
      <div className='relative'>
        <div className='absolute -right-[46px] -top-3.5 z-10 py-1.5 px-2.5 bg-slate-200 rounded-r-md'>
          <FontAwesomeIcon icon={faChevronRight} size='lg' />
        </div>
      </div>
      <p className='font-semibold text-md mb-1'>Filtrar por:</p>
      <div className='flex flex-col gap-1 text-md'>
        <FilterCheckbox
          setState={checkboxOnChange}
          label='Impresoras Monocromáticas'
          name='iByN'
          theme={theme}
        />
        <FilterCheckbox
          setState={checkboxOnChange}
          label='Impresoras Color'
          name='iColor'
          theme={theme}
        />
        <hr className='my-2' />
        <FilterCheckbox
          setState={checkboxOnChange}
          label='Multifunción Monocromáticas'
          name='mByN'
          theme={theme}
        />
        <FilterCheckbox
          setState={checkboxOnChange}
          label='Multifunción Color'
          name='mColor'
          theme={theme}
        />
      </div>
    </div>
  );
};

export default Filter;
