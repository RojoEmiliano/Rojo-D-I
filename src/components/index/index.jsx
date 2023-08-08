import './index.scss'
import React from 'react'
import portadaepson from '../../assets/img/portadaepson.jpg'
import portadaricoh from '../../assets/img/portadaricoh.jpg'
import ricoh from '../../assets/img/ricoh.jpg'
import epson from '../../assets/img/epson.jpg'
import samsung from '../../assets/img/samsung.svg'
import hp from '../../assets/img/hp.svg'
import brother from '../../assets/img/brother.svg'
import ricohsvg from '../../assets/img/ricoh.svg'
import epsonsvg from '../../assets/img/epson.svg'

function Index() {

  return (
    <div className='indexContainer'>
      <div className='indexTitle'>
        <h1 className='title'>NUESTRAS MARCAS</h1>
        <hr />
        <p className='title'>EQUIPOS</p>
      </div>
      <div className='Container'>
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

        </div>    
    </div>
  )
}

export default Index