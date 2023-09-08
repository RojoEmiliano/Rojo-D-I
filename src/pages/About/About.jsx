import React from 'react';
import { FaRegHandshake, FaWalking, FaPeopleCarry } from 'react-icons/fa';
import { FaHeartPulse, FaScaleBalanced } from 'react-icons/fa6';
import { GiPodiumWinner } from 'react-icons/gi';
import './about.scss';
import AboutCard from '../../components/AboutCard/AboutCard';

const SobreNosotros = () => {
  return (
    <div className='bg-gray-100 relative'>
      <div className='flex justify-center'>
        <div className='sobreNosotros bg-no-repeat flex justify-center px-[30%] py-[13%] w-full'>
          <h1 className='text-white bg-black/[.5] text-lg mb:text-2xl lb:text-4xl w-fit sbMax:p-3 p-6 rounded-lg text-center'>
            ¿Quiénes Somos?
          </h1>
        </div>
      </div>
      <div className='flex m-10 max-w-[100%] justify-center items-center'>
        <div className='flex justify-center mb:max-w-[80%] flex-col text-lg text-justify'>
          <p>
            Somos <strong> Rojo Digitalización e Impresión</strong>, un referente en el mundo de
            soluciones tecnológicas desde nuestro establecimiento en el año 2000. Como
            distribuidores y servicio técnico oficial de renombradas marcas como Ricoh y Epson, así
            como proveedores y especialistas técnicos certificados por HP, Brother y Samsung, nos
            enorgullecemos de ofrecer servicios de primer nivel en el ámbito de la tecnología de
            oficina.
          </p>
          <br />
          <p>
            Nos especializamos en brindar soluciones integrales a empresas de todos los tamaños,
            poniendo a su disposición una amplia gama de equipos multifuncionales, impresoras,
            plotters, escáneres e insumos relacionados. Nuestra dedicación va más allá de
            simplemente proveer tecnología; nos esforzamos por ser socios en el crecimiento de su
            negocio, proporcionándole herramientas que optimicen sus operaciones y mejoren su
            eficiencia.
          </p>
          <br />
          <p>
            Nuestra misión principal es sobrepasar las expectativas de nuestros clientes. La
            historia y experiencia en el sector nos respaldan, pero es nuestra dedicación por
            brindar un servicio excepcional lo que nos distingue. Cada interacción con nuestro
            equipo se convierte en una oportunidad para demostrar nuestro compromiso con la calidad
            y la excelencia. Desde ofrecer orientación personalizada hasta proporcionar soluciones
            técnicas rápidas y efectivas, nos esforzamos para asegurar que su experiencia con
            nosotros sea invariablemente satisfactoria.
          </p>
          <br />
          <p>
            Confíe en nosotros para brindarle las soluciones tecnológicas que su empresa necesita.
            Explore nuestra variedad de equipos y servicios, respaldados por marcas líderes en la
            industria y por nuestro compromiso inquebrantable con la calidad. En Rojo Digitalización
            e Impresión, estamos aquí para impulsar su éxito a través de la innovación tecnológica y
            el servicio ejemplar.
          </p>
          <br />
        </div>
      </div>
      <h2 className='flex justify-center p-4 text-3xl text-black'>Nuestros Valores:</h2>
      <div className='bg-gray-200 flex flex-wrap justify-evenly p-6 items-center gap-6 lbMax:flex-col'>
        <AboutCard
          title='El cliente en el Centro'
          text='Actuar desde la perspectiva del cliente'
          icon={<FaRegHandshake />}
        />
        <AboutCard
          title='GEMBA'
          text='Aprende y mejora a partir de los hechos'
          icon={<FaWalking />}
        />
        <AboutCard
          title='Trabajo en equipo'
          text='Respetar a todas las partes interesadas y co-crear valor'
          icon={<FaPeopleCarry />}
        />
        <AboutCard
          title='Pasión'
          text='Respetar a todas las partes interesadas y co-crear valor'
          icon={<FaHeartPulse />}
        />
        <AboutCard
          title='Ética e Integridad'
          text='Actuar con honestidad y responsabilidad'
          icon={<FaScaleBalanced />}
        />
        <AboutCard
          title='Espíritu Ganador'
          text='Tener éxito aceptando desafíos a través del coraje y la agilidad'
          icon={<GiPodiumWinner />}
        />
      </div>
    </div>
  );
};

export default SobreNosotros;
