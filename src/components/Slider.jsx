import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = ({ slides, resY, resX }) => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // const goToNext = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  // const goToPrevious = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  const settings = {
    dots: false, // Muestra los puntos de navegación
    infinite: true, // Permite navegar infinitamente
    speed: 500, // Velocidad de animación en milisegundos
    slidesToShow: 1, // Número de slides a mostrar en una vista
    slidesToScroll: 1, // Número de slides a desplazar por vez
    autoplay: false, // Reproducir automáticamente el slider
    autoplaySpeed: 3000, // Intervalo de cambio de slide en milisegundos
    initialSlide: 0,
    arrows: false,
  };
  return (
    <div className='w-full relative'>
      <Slider ref={sliderRef} {...settings}>
        {slides.map(slide => {

          return <img key={slide} src={slide} alt='impresora' />;
        })}
      </Slider>
      <button
        onClick={() => sliderRef.current.slickPrev()}
        className='absolute left-2 top-[50%] z-10'
      >
        <FontAwesomeIcon className='hover:text-rojo transition-all' size='xl' icon={faArrowLeft} />
      </button>
      <button
        onClick={() => sliderRef.current.slickNext()}
        className='absolute right-2 top-[50%] z-10'
      >
        <FontAwesomeIcon className='hover:text-rojo transition-all' size='xl' icon={faArrowRight} />
      </button>
    </div>
    // <div className='w-full h-full relative'>
    //   <button onClick={goToPrevious} className='absolute left-2 top-[50%] z-10'>
    //     <FontAwesomeIcon size='xl' icon={faArrowLeft} />
    //   </button>
    //   <button onClick={goToNext} className='absolute right-2 top-[50%] z-10'>
    //     <FontAwesomeIcon size='xl' icon={faArrowRight} />
    //   </button>
    //   <div
    //     style={{ backgroundImage: `url(${slides[currentIndex]})` }}
    //     className='w-full h-full bg-center bg-cover transition-all'
    //   ></div>
    // </div>
  );
};

export default SliderComponent;
