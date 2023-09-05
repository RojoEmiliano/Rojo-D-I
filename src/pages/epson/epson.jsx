import React, { useState } from 'react';

import epsonProducts from '../../assets/data/epson';
import { themes } from '../../utils/themes';
import ListItems from '../../components/ListItems/ListItems';
import useLoading from '../../hooks/useLoading';

const Epson = () => {
  const [products, setProducts] = useState(epsonProducts);
  const { loading, show } = useLoading();

  return (
    <ListItems
      loading={loading}
      show={show}
      theme={themes.epson}
      products={products}
      setProducts={setProducts}
      data={epsonProducts}
    />
  );
};

export default Epson;
