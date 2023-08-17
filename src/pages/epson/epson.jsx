import React from 'react';

import { products } from '../../assets/data/epson';
import SliderComponent from '../../components/Slider/Slider';
import './epson.scss';
import ShowMoreButton from '../../commons/ShowMoreButton/ShowMoreButton';
import { themes } from '../../utils/themes';

const Epson = () => {
  return (
    <div className='w-full border'>
      <div className='flex flex-wrap justify-evenly'>
        {products.map(product => (
          <div
            key={product.name}
            className={`productCard flex flex-col items-center border mt-7 max-w-[500px] relative`}
          >
            <div className='w-full max-h-[338px]'>
              <SliderComponent slides={product.imgs} theme={themes.epson} />
            </div>
            <div className='w-full text-center bg-white px-4'>
              <h2 className='font-medium text-xl'>{product.name}</h2>
            </div>
            <ShowMoreButton theme={themes.epson} />
            <div className='h-[60px]'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Epson;
