import React from 'react';
import { Link } from 'react-router-dom';

const IndexCard = ({ link, img, title, text }) => {
  return (
    <Link
      to={`${link}`}
      className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md cursor-pointer 
            hover:shadow-lg transform hover:-translate-y-2 transition-transform max-w-[432px]'
    >
      <img src={img} className='w-14 mb:w-20' />
      <h3 className='text-xl font-semibold mt-2'>{title}</h3>
      <p className='mb:text-xl text-gray-500 mt-1 text-center'>{text}</p>
    </Link>
  );
};

export default IndexCard;
