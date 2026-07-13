export const checkFilter = (filter, optFilterName) => {
  if (!filter) return false;

  const filterValues = Object.values(filter);
  let isFiltering = false;

  if (optFilterName) {
    for (let i = 0; i < filterValues.length; i++) {
      if (filterValues[i] === optFilterName) isFiltering = true;
    }
  } else {
    for (let i = 0; i < filterValues.length; i++) {
      if (filterValues[i] !== '') isFiltering = true;
    }
  }

  return isFiltering;
};
