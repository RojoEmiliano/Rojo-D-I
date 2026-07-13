import React, { useEffect, useState } from 'react';

import { fetchProducts } from '../../api/products';
import { themes } from '../../utils/themes';
import ListItems from '../../components/ListItems/ListItems';
import useLoading from '../../hooks/useLoading';
import HelmetCommon from '../../commons/HelmetCommon/HelmetCommon';

const Epson = () => {
  const [products, setProducts] = useState([]);
  const { loading, show, setLoading } = useLoading();

  useEffect(() => {
    const controller = new AbortController();
    const minDelay = new Promise(resolve => setTimeout(resolve, 1500));

    Promise.all([fetchProducts('epson', { signal: controller.signal }), minDelay])
      .then(([data]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') throw err;
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      <HelmetCommon title='ROJO D-I: Epson' />
      <ListItems
        loading={loading}
        show={show}
        theme={themes.epson}
        products={products}
        setProducts={setProducts}
        data={products}
      />
    </>
  );
};

export default Epson;
