import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

import Carousel from 'react-bootstrap/Carousel';
import Epson from '../../pages/epson/epson';
import { Link } from 'react-router-dom';
import React from 'react'
import SliderComponent from '../Slider/Slider'
import brother from '../../assets/img/brother.svg'
import epson from '../../assets/img/epson.jpg'
import epsonsvg from '../../assets/img/epson.svg'
import hp from '../../assets/img/hp.svg'
import {inicioEpson} from '../../assets/data/inicio';
import portadaepson from '../../assets/img/portadaepson.jpg'
import portadaricoh from '../../assets/img/portadaricoh.jpg'
import ricoh from '../../assets/img/ricoh.jpg'
import ricohsvg from '../../assets/img/ricoh.svg'
import samsung from '../../assets/img/samsung.svg'
import { themes } from '../../utils/themes';
import tintasEpson from '../../assets/img/Tintas-Epson-T673.jpg'

function Index() {

  return (
    <div className='flex flex-col  w-full h-full '>
    {/* -------------------------PORTADA------------------------------------------------- */}
      <div className='index flex flex-col text-5xl italic justify-center gap-y-4 content-center w-full h-40 flex-wrap place-items-center'>
        <h1>BIENVENIDOS A <span className='text'>R</span>OJO</h1>
        <h2>DIGITALIZACIÓN & IMPRESIÓN</h2>
      </div>
      <div className='flex p-2 '>
        <div className='w-2/4'> 
          <img src={portadaepson} className='rounded-lg' />
        </div>

        <div className='place-items-center w-2/4 justify-center items-center'>
          <div className='flex flex-col items-center'>
            <img src={epson} className='w-40 '/>
          </div>
          <div className='flex flex-col items-center'>
            <p className='p-6 text-xl'>Epson es una reconocida marca global en tecnología de impresión, conocida por su compromiso con la innovación y la calidad en el mundo de las impresoras y las tintas. Con décadas de experiencia, Epson se ha destacado por ofrecer soluciones de impresión de alta calidad para hogares y empresas.</p>
            <Link to='/epson'>
              <button className='buttonEpson'>IR A EPSON</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-row-reverse p-2 items-center '>
        <div className='w-2/4'> 
          <img src={portadaricoh} className='rounded-lg' />
        </div>

        <div className='place-items-center w-2/4 justify-center items-center'>
          <div className='flex flex-col items-center'>
            <img src={ricoh} className='w-40 '/>
          </div>
          <div className='flex flex-col items-center'>
            <p className='p-6 text-xl'>Ricoh es una destacada empresa global en tecnología de impresión y soluciones de oficina. Reconocida por su enfoque en la innovación y la eficiencia, Ricoh ofrece una amplia gama de impresoras y tintas diseñadas para satisfacer las necesidades tanto de empresas como de usuarios individuales.</p>
            <Link to='/ricoh'>
              <button className='buttonRicoh'>IR A RICOH</button>
            </Link>
          </div>
        </div>
      </div>
      {/* ---------------------------------SERVICIOS-------------------------------------------- */}
      <div className='flex flex-col w-full p-2'>
        <h2 className='text-4xl text-center m-2'>NUESTROS SERVICIOS</h2>
      </div>
    </div>
  )
}

export default Index


{/* <div className='Container'>
<div className='imgContainer'>
  <img className='indexImg' src={portadaepson}  />
  <div className='marca'>
    <img className='marcaImg' src={epson} />
  </div>
</div>
<div className='imgContainer'>
  <img className='indexImg' src={portadaricoh}  />
  <div className='marca'>
    <img className='marcaImg' src={ricoh} />
  </div>
</div>
</div>
<div className='indexTitle'>
  <p className='title'>INSUMOS Y SERVICIOS</p>
  <div className='indexMarcas'>
    <img id='ricohsvg' className='marcasItem' src={ricohsvg} alt="Ricoh" />
    <img className='marcasItem' src={epsonsvg} alt="epson" />
    <img className='marcasItem' src={samsung} alt="samsung" />
    <img className='marcasItem' src={hp} alt="hp" />
    <img className='marcasItem' src={brother} alt="brother" />
  </div>
  <span>Consultar por modelos y stock</span>
  <hr />

</div>     */}