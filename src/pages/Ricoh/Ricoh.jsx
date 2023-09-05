import React, { useState } from 'react';

import ricohProducts from '../../assets/data/ricoh';
import { themes } from '../../utils/themes';
import ListItems from '../../components/ListItems/ListItems';
import useLoading from '../../hooks/useLoading';

function Ricoh() {
  const [products, setProducts] = useState(ricohProducts);
  const { loading, show } = useLoading();

  return (
    <ListItems
      loading={loading}
      show={show}
      theme={themes.ricoh}
      products={products}
      setProducts={setProducts}
      data={ricohProducts}
    />
  );
}

export default Ricoh;
