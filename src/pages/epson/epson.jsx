import React from 'react';

import { products } from '../../assets/data/epson';
import SliderComponent from '../../components/slider';

const Epson = () => {
  return (
    <div className='w-full border'>
      <div className='flex flex-wrap justify-evenly'>
        {products.map(product => (
          <div key={product.name} className='flex flex-col items-center border mt-20 max-w-[500px]'>
            <div className='w-full max-h-[338px]'>
              <SliderComponent slides={product.imgs} />
            </div>
            <div className='w-full text-center'>
              <h2 className='font-medium text-xl'>{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Epson;
