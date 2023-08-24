import React from 'react';

import './listItems.scss';

import SliderComponent from '../Slider/Slider';
import ShowMoreButton from '../../commons/ShowMoreButton/ShowMoreButton';
import { useFilter } from '../../hooks/useFilter';

const ListItems = ({ theme, products, setProducts, data }) => {
  const { Filter } = useFilter({ data, setState: setProducts, theme: theme });

  return (
    <div className='w-full lb:px-8 px-2 pb-[130px] flex flex-col items-center bg-slate-50'>
      <div className='flex items-center justify-center bg-slate-50'>
        <img
          src={`/${theme}/img/logo/${theme}.svg`}
          className='py-10 max-w-[200px] max-h-[200px] flex justify-center items-center'
        />
      </div>
      <div className='max-w-[1600px] w-full bg-white rounded-md shadow-x'>
        {Filter}
        <div className={`flex mbMax:flex-col mbMax:items-center mb:flex-wrap mb:justify-evenly`}>
          {products.map(product => (
            <div
              key={product.name}
              className={`productCard flex flex-col items-center mt-7 sbMax:max-w-[350px] sb:max-w-[500px] relative`}
            >
              <div className='w-full bg-white'>
                <SliderComponent slides={product.imgs} theme={theme} />
              </div>
              <div className='w-full text-center bg-white px-4'>
                <h2 className='font-medium text-xl'>{product.name}</h2>
              </div>
              <ShowMoreButton theme={theme} brand={theme} modelCode={product.specs.modelCode} />
              <div className='h-[60px]'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListItems;
