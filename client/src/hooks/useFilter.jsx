import { useEffect, useState } from 'react';

import { productsTypes } from '../utils/productsTypes';
import Filter from '../components/Filter/Filter';
import useMediaQuery from './useMediaQuery';
import MobileFilter from '../components/Filter/MobileFilter';
import { checkFilter } from '../utils/checkFilter';

export const useFilter = ({ data, setState, theme }) => {
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const isFiltering = checkFilter(filter);

    if (isFiltering) {
      setState(() =>
        data.filter(prod => {
          return prod.type === filter[prod.type];
        })
      );
    } else {
      setState(data);
    }
  }, [filter]);

  const checkboxOnChange = e => {
    const type = e.target.name;
    const { checked } = e.target;

    if (checked) {
      setFilter({
        ...filter,
        [type]: productsTypes[type],
      });
    } else {
      setFilter({
        ...filter,
        [type]: '',
      });
    }
  };

  return {
    Filter: useMediaQuery(1024) ? (
      <MobileFilter checkboxOnChange={checkboxOnChange} theme={theme} filter={filter} />
    ) : (
      <Filter checkboxOnChange={checkboxOnChange} theme={theme} filter={filter} />
    ),
  };
};
