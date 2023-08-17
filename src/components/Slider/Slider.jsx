import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ArrowButton from '../../commons/ArrowButton/ArrowButton';

const SliderComponent = ({ slides, theme }) => {
  const sliderRef = useRef(null);

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
    adaptiveHeight: false,
  };

  return (
    <div className='w-full relative'>
      <Slider ref={sliderRef} {...settings}>
        {slides.map(slide => {
          return <img key={slide} src={slide} alt='impresora' />;
        })}
      </Slider>
      <ArrowButton onClick={() => sliderRef.current.slickPrev()} theme={theme} orientation='left-2' />
      <ArrowButton onClick={() => sliderRef.current.slickPrev()} theme={theme} orientation='right-2' />
    </div>
  );
};

export default SliderComponent;
