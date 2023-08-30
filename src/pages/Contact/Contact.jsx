import React from "react";
import "./contact.scss";
import logo from "../../assets/img/logoindex.jpg";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { FiMapPin } from "react-icons/fi";
import { BsPinMapFill } from "react-icons/bs";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
  };

  return (
    <div className="bg-gray-100 p-16">
      <div className="flex justify-center p-6">
        <img src={logo} alt="Logo" />
      </div>
      <div className="grid grid-cols-2 bg-gray-200">
        <div>
          <h2 className="text-center text-3xl p-2">
            ¿POR QUÉ DEBERIAMOS CONTACTARTE?
          </h2>

          <div className="flex flex-col justify-center p-10 bg-gray-200 items-center ">
            <form
              className="w-100 p-10 bg-white rounded-md shadow-md"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label htmlFor="fullName" className="block mb-1 font-medium">
                  Nombre y Apellido
                </label>
                <input
                  id="fullName"
                  className="w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring focus:border-ricoh"
                  type="text"
                  placeholder="Nombre y Apellido"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-1 font-medium">
                  Celular
                </label>
                <input
                  id="phone"
                  className="w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring focus:border-ricoh"
                  type="tel"
                  placeholder="Celular"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  className="w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring focus:border-ricoh"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1 font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring focus:border-ricoh"
                  placeholder="Mensaje"
                  required
                />
              </div>
              <button
                className="w-full py-2 bg-ricoh hover:bg-ricohHover duration-300 rounded-md text-white"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        <div className="">
          <h3 className="text-center p-2 text-3xl">CONTÁCTANOS</h3>
          <div className="flex flex-col justify-center p-10 bg-gray-200 items-center  ">
            <div className="w-100 p-10 bg-white rounded-md shadow-md flex flex-col">
            <div className="flex items-center p-1">
              <BsPinMapFill className="text-ricoh text-3xl" />
              <p className="text-lg p-1">Godoy Cruz, Mendoza, Argentina.</p>
            </div>
            <div className="flex items-center p-1">
              <FiMapPin className="text-ricoh text-3xl" />
              <p className="text-lg p-1">Juan A. Maza Esquina O'higgins</p>
            </div>
            <div className="flex items-center p-1">
              <AiOutlineMail className="text-ricoh text-3xl" />
              <p className="text-lg p-1">rojodigeimp@gmail.com</p>
            </div>
            <div className="flex items-center p-1">
              <AiOutlineMail className="text-ricoh text-3xl" />
              <p className="text-lg p-1">gustavomrojo1@gmail.com</p>
            </div>
            <div className="flex items-center p-1">
              <AiOutlineWhatsApp className="text-ricoh text-3xl" />
              <p className="text-lg p-1">+54 9261 6530572</p>
            </div>
            <div className="flex items-center p-1">
              <GiRotaryPhone className="text-ricoh text-3xl" />
              <p className="text-lg p-1">+54 261 4225145</p>
            </div>
            </div>

          </div>
        </div>
      </div>

      <div className="flex justify-center text-center p-10 bg-gray-300">
        <iframe
          className="w-[100%] h-[450px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.0662487474433!2d-68.85695332344865!3d-32.92284787068863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0b36114341dd%3A0xedea275072ef2128!2sRojo%20Digitalizaci%C3%B3n%20e%20impresi%C3%B3n.!5e0!3m2!1ses-419!2sar!4v1693411712530!5m2!1ses-419!2sar"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
