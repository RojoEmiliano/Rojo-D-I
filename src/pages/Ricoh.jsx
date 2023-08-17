import React from 'react';
import products from '../assets/data/ricoh';
import { Link } from 'react-router-dom';
import SliderComponent from '../components/Slider/Slider';
import ShowMoreButton from '../commons/ShowMoreButton/ShowMoreButton';
import { themes } from '../utils/themes';
import "./ricoh.scss"

function Ricoh() {
  return (
    <div className='w-full border'>
      <div className='flex items-center justify-center'>
        <img
          src='/ricoh/img/banner/ricoh.png'
          className='pt-10 max-w-[200px] max-h-[200px] flex justify-center items-center' />
      </div>
      <div className='flex flex-wrap justify-evenly'>
        {products.map(product => (
          <div key={product.name} className= 'productCard relative flex flex-col items-center border mt-7 max-w-[500px]'>
            <div className='bg-white w-full max-h-[338px]'>
              <SliderComponent slides={product.imgs} theme={themes.ricoh} resY='338px' resX='500px' />
            </div>
            <div className='bg-white w-full text-center px-4'>
              <h2 className='font-medium text-xl'>{product.name}</h2>
            </div>
            <ShowMoreButton theme={themes.ricoh} brand="ricoh" modelCode={product.specs.modelCode} />
            <div className='h-[60px]'></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ricoh;
