import React, { useState } from 'react';

import epsonProducts from '../../assets/data/epson';
import { themes } from '../../utils/themes';
import ListItems from '../../components/ListItems/ListItems';

const Epson = () => {
  const [products, setProducts] = useState(epsonProducts);

  return (
    <ListItems
      theme={themes.epson}
      products={products}
      setProducts={setProducts}
      data={epsonProducts}
    />
  );
};

export default Epson;
