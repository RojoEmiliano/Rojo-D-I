import React, { useState } from 'react';

import ricohProducts from '../assets/data/ricoh';
import SliderComponent from '../components/Slider/Slider';
import ShowMoreButton from '../commons/ShowMoreButton/ShowMoreButton';
import { themes } from '../utils/themes';
import './ricoh.scss';
import { useFilter } from '../hooks/useFilter';

function Ricoh() {
  const [products, setProducts] = useState(ricohProducts);
  const { Filter } = useFilter({ data: ricohProducts, setState: setProducts, theme: themes.ricoh });

  return (
    <div className='w-full px-8 flex justify-center'>
      <div className='max-w-[1600px] w-full'>
        <div className='flex items-center justify-center'>
          <img
            src='/epson/img/logo/epson.svg'
            className='pt-10 max-w-[200px] max-h-[200px] flex justify-center items-center'
          />
        </div>
        {Filter}
        <div className={`flex mbMax:flex-col mbMax:items-center mb:flex-wrap mb:justify-evenly`}>
          {products.map(product => (
            <div
              key={product.name}
              className={`productCard flex flex-col items-center border mt-7 sbMax:max-w-[350px] sb:max-w-[500px] relative`}
            >
              <div className='w-full'>
                <SliderComponent slides={product.imgs} theme={themes.epson} />
              </div>
              <div className='w-full text-center bg-white px-4'>
                <h2 className='font-medium text-xl'>{product.name}</h2>
              </div>
              <ShowMoreButton
                theme={themes.epson}
                brand='epson'
                modelCode={product.specs.modelCode}
              />
              <div className='h-[60px]'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ricoh;
