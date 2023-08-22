import { useEffect, useState } from 'react';

import { productsTypes } from '../utils/productsTypes';
import Filter from '../components/Filter/Filter';

export const useFilter = ({ data, setState, theme }) => {
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const filterValues = Object.values(filter);
    let isFiltering = false;

    for (let i = 0; i < filterValues.length; i++) {
      if (filterValues[i] !== '') isFiltering = true;
    }

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
    Filter: <Filter checkboxOnChange={checkboxOnChange} theme={theme} />,
  };
};
