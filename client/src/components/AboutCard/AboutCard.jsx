import React from 'react';

const AboutCard = ({ icon, title, text }) => {
  return (
    <div className='flex flex-col items-center justify-center lb:w-1/4 lbMax:w-full max-w-[400px] h-[272px] bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:-translate-y-2 transition-transform'>
      <div className='lb:text-9xl sb:text-8xl text-7xl text-ricoh'>{icon}</div>
      <h3 className='text-xl font-semibold mt-2'>{title}</h3>
      <p className='text-lg mb:text-xl text-gray-500 mt-1 text-center justify-self-center'>
        {text}
      </p>
    </div>
  );
};

export default AboutCard;
