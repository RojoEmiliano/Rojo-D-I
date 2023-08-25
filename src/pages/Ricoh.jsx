import React, { useState } from 'react';

import ricohProducts from '../assets/data/ricoh';
import { themes } from '../utils/themes';
import ListItems from '../components/ListItems/ListItems';

function Ricoh() {
  const [products, setProducts] = useState(ricohProducts);

  return (
    <ListItems
      theme={themes.ricoh}
      products={products}
      setProducts={setProducts}
      data={ricohProducts}
    />
  );
}

export default Ricoh;
