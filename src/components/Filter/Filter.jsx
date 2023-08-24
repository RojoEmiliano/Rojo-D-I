import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faF, faI, faL, faO, faR, faS, faT } from '@fortawesome/free-solid-svg-icons';

import FilterCheckbox from '../../commons/FilterCheckbox/FilterCheckbox';
import './filter.scss';
import { themes } from '../../utils/themes';

const Filter = ({ checkboxOnChange, theme }) => {
  return (
    <div className={`filter bg-gray-200 fixed w-[300px] -ml-[300px] h-[185px] left-0 top-[168px] z-20 p-3.5 hover:ml-0 shadow-lg`}>
      <div className='relative'>
        <div className={`absolute -right-[46px] -top-3.5 z-10 py-1.5 px-2.5 bg-gray-300 rounded-tr-md`}>
          <FontAwesomeIcon icon={faChevronRight} size='lg' />
        </div>
        <div className={`absolute flex flex-col justify-evenly items-center px-[11.5px] py-1.5 h-[149px] 
        bg-gray-300 -right-[46px] top-[22px] rounded-br-md`}>
          <FontAwesomeIcon icon={faF} size='2xs' />
          <FontAwesomeIcon icon={faI} size='2xs' />
          <FontAwesomeIcon icon={faL} size='2xs' />
          <FontAwesomeIcon icon={faT} size='2xs' />
          <FontAwesomeIcon icon={faR} size='2xs' />
          <FontAwesomeIcon icon={faO} size='2xs' />
          <FontAwesomeIcon icon={faS} size='2xs' />
        </div>
      </div>
      <div className='flex items-center h-full w-full'>
        <div className='flex flex-col gap-1 text-md w-full'>
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
    </div>
  );
};

export default Filter;
