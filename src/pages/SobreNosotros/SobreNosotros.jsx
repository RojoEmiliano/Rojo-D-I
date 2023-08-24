import React from "react";
import { FaRegHandshake, FaWalking, FaPeopleCarry } from "react-icons/fa";
import { FaHeartPulse, FaScaleBalanced } from "react-icons/fa6";
import './sobreNosotros.scss'

const SobreNosotros = () => {
  return (
    <div className="bg-gray-100">
      <div className="sobreNosotros">
      <h1 className="text-black text-4xl flex justify-center p-6">
        ¿Quienes Somos?
      </h1>
      </div>
      <div className="flex m-10 max-w-[100%] justify-center items-center">
        <div className="flex justify-center max-w-[80%] flex-col">
          <p>
            {" "}
            Somos <strong> Rojo Digitalización e Impresión</strong>, un
            referente en el mundo de soluciones tecnológicas desde nuestro
            establecimiento en el año 2000. Como distribuidores y servicio
            técnico oficial de renombradas marcas como Ricoh y Epson, así como
            proveedores y especialistas técnicos certificados por HP, Brother y
            Samsung, nos enorgullecemos de ofrecer servicios de primer nivel en
            el ámbito de la tecnología de oficina.
          </p>
          <br />
          <p>
            Nos especializamos en brindar soluciones integrales a empresas de
            todos los tamaños, poniendo a su disposición una amplia gama de
            equipos multifuncionales, impresoras, plotters, escáneres e insumos
            relacionados. Nuestra dedicación va más allá de simplemente proveer
            tecnología; nos esforzamos por ser socios en el crecimiento de su
            negocio, proporcionándole herramientas que optimicen sus operaciones
            y mejoren su eficiencia.
          </p>
          <br />
          <p>
            En Rojo Digitalización e Impresión, nuestra misión principal es
            superar las expectativas de nuestros clientes. Nuestra trayectoria y
            experiencia en el sector nos respaldan, pero es nuestra pasión por
            ofrecer un servicio excepcional lo que nos diferencia. Cada
            interacción con nuestro equipo es una oportunidad para demostrar
            nuestro compromiso con la calidad y la excelencia. Desde
            asesoramiento personalizado hasta soluciones técnicas rápidas y
            efectivas, estamos aquí para garantizar que su experiencia con
            nosotros sea siempre satisfactoria.
          </p>
          <br />
          <p>
            Confíe en nosotros para brindarle las soluciones tecnológicas que su
            empresa necesita. Explore nuestra variedad de equipos y servicios,
            respaldados por marcas líderes en la industria y por nuestro
            compromiso inquebrantable con la calidad. En Rojo Digitalización e
            Impresión, estamos aquí para impulsar su éxito a través de la
            innovación tecnológica y el servicio ejemplar.
          </p>
          <br />
        </div>
      </div>

      <h2 className="flex justify-center p-4 text-3xl text-black">
        Nuestros Valores:{" "}
      </h2>
      <div className="bg-gray-200 flex flex-wrap justify-evenly px-6 items-center">
        <div className="flex flex-col items-center w-1/4 h-[272px] bg-white p-6 m-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:-translate-y-2 transition-transform">
          <FaRegHandshake className="text-9xl text-ricoh" />
          <h3 className="text-xl font-semibold mt-2">
            El cliente en el Centro
          </h3>
          <p className="text-xl text-gray-500 mt-1 text-center justify-self-center">
            Actuar desde la perspectiva del cliente.
          </p>
        </div>
        <div className="flex flex-col items-center w-1/4 h-[272px] bg-white p-6 m-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:-translate-y-2 transition-transform">
          <FaWalking className="text-9xl text-ricoh" />
          <h3 className="text-xl font-semibold mt-2">GEMBA</h3>
          <p className="text-xl text-gray-500 mt-1 text-center justify-self-center">
            Aprende y mejora a partir de los hechos
          </p>
        </div>
        <div className="flex flex-col items-center w-1/4 h-[272px] bg-white p-6 m-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:-translate-y-2 transition-transform">
          <FaPeopleCarry className="text-9xl text-ricoh" />
          <h3 className="text-xl font-semibold mt-2">Trabajo en equipo</h3>
          <p className="text-xl text-gray-500 mt-1 text-center justify-self-center">
            Respetar a todas las partes interesadas y co-crear valor
          </p>
        </div>
        <div className="flex flex-col items-center w-1/4 h-[272px] bg-white p-6 m-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:-translate-y-2 transition-transform">
          <FaHeartPulse className="text-9xl text-ricoh" />
          <h3 className="text-xl font-semibold mt-2">Pasión</h3>
          <p className="text-xl text-gray-500 mt-1 text-center justify-self-center">
            Actuar desde la perspectiva del cliente.
          </p>
        </div>
        <div className="flex flex-col items-center w-1/4 h-[272px] bg-white p-6 m-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:-translate-y-2 transition-transform">
          <FaScaleBalanced className="text-9xl text-ricoh" />
          <h3 className="text-xl font-semibold mt-2">Etica e integridad</h3>
          <p className="text-xl text-gray-500 mt-1 text-center justify-self-center">
            Actuar con honestidad y responsabilidad.
          </p>
        </div>
        <div className="flex flex-col items-center w-1/4 h-[272px] bg-white p-6 m-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:-translate-y-2 transition-transform">
          <FaHeartPulse className="text-9xl text-ricoh" />
          <h3 className="text-xl font-semibold mt-2">Espíritu Ganador</h3>
          <p className="text-xl text-gray-500 mt-1 text-center justify-self-center">
            Tener éxito aceptando desafíos a través del coraje y la agilidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
