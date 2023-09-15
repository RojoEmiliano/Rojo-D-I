import React, { useEffect, useState } from 'react';

import ricohProducts from '../../assets/data/ricoh';
import { themes } from '../../utils/themes';
import ListItems from '../../components/ListItems/ListItems';
import useLoading from '../../hooks/useLoading';
import HelmetCommon from '../../commons/HelmetCommon/HelmetCommon';

function Ricoh() {
  const [products, setProducts] = useState(ricohProducts);
  const { loading, show } = useLoading();

  // useEffect(() => {
  //   if (document) 
  // }, []);
  // document.title = 'ROJO D-I: Ricoh';

  return (
    <>
    <HelmetCommon title='ROJO D-I: Ricoh' />
    <ListItems
      loading={loading}
      show={show}
      theme={themes.ricoh}
      products={products}
      setProducts={setProducts}
      data={ricohProducts}
      />
      </>
  );
}

export default Ricoh;
