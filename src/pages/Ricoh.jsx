import React from 'react'
import { products } from '../assets/data/ricoh'; 


const Ricoh = () => {

    return (
        <div className='w-full border'>
          <div className='flex flex-wrap justify-evenly'>
            {products.map(product => (
              <div key={product.name} className='flex flex-col items-center mt-4 border'>
                <img src={product.imgs[0]} alt='impresora' />
                <h2 className='font-medium text-xl'>{product.name}</h2>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Ricoh