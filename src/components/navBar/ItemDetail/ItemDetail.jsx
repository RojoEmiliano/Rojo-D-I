import React, { useState, useEffect } from "react";
import { products } from "../../../assets/data/ricoh";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import SliderComponent from "../../slider";

const ItemDetail = () => {
  const location = useLocation();

  const { modelCode } = useParams();
  const [item, setItem] = useState(() => {
    return products.filter((product) => product.modelCode === modelCode);
  });
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };

  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (location.pathname.includes("ricoh")) {
      setTheme("ricoh");
    } else if (location.pathname.includes("epson")) {
      setTheme("epson");
    }
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="text-xl font-semibold mb-4">{item[0].name}</div>
        <div className="max-w-md mx-auto mb-6">
          <SliderComponent slides={item[0].imgs} />
        </div>
        <hr />
        <div className="py-4">
          <p className="mb-2 font-bold">Descripción:</p>
          <ul className="list-disc list-inside">
            {item[0].description.map((text, index) => (
              <li key={index} className="mb-2">
                {text}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div>
          <div className="py-4">
            <p className="mb-2 font-bold">Especificaciones:</p>
            <li>{item[0].specs.printTec}</li>
            <li>{item[0].specs.maxRes}</li>
            <li>{item[0].specs.maxPrintSpeed}</li>
          </div>
          <hr />

          <div className="py-4">
            <p className="mb-2 font-bold">General:</p>
            <li>
              {" "}
              <span className="font-semibold">Sistemas operativos:</span>{" "}
              {item[0].general.oz}
            </li>
            <li>
              {" "}
              <span className="font-semibold">Tamaño:</span>{" "}
              {item[0].general.size}
            </li>
            <li>
              {" "}
              <span className="font-semibold">Peso:</span>{" "}
              {item[0].general.weigth}
            </li>
          </div>
          <hr />

          <div className="py-4">
            <p className="mb-2 font-bold">Conectividad:</p>
            <li>
              {" "}
              <span className="font-semibold">Puertos:</span>{" "}
              {item[0].conectivity.standarConectivity}
            </li>
            <li>
              {" "}
              <span className="font-semibold">Protocolos de red:</span>{" "}
              {item[0].conectivity.netProtocols}
            </li>
          </div>
          <hr />

          <div className="py-4">
            <p className="mb-2 font-bold">Manejo de papel</p>
            <li>
              {" "}
              <span className="font-semibold">Tamaños de papel:</span>{" "}
              {item[0].paperHandling.paperSize}
            </li>
            <li>
              {" "}
              <span className="font-semibold">Tipos de papel:</span>{" "}
              {item[0].paperHandling.paperType}
            </li>
            <li>
              {" "}
              <span className="font-semibold">Gramajes:</span>{" "}
              {item[0].paperHandling.paperWeight}
            </li>
            <li>
              {" "}
              <span className="font-semibold">Capacidad de entrada:</span>{" "}
              {item[0].paperHandling.paperEntryCapacity}
            </li>
            <li>
              {" "}
              <span className="font-semibold">Capacidad de salida:</span>{" "}
              {item[0].paperHandling.paperOutCapacity}
            </li>
          </div>
        </div>

        <hr />
        <div className="w-[60%]">
          <div className="flex justify-between items-center ">
            <button
              className={`${
                theme === "ricoh"
                  ? "bg-rojo hover:bg-rojo/[0.9] "
                  : theme === "epson"
                  ? "bg-epson hover:bg-epson/[0.9]"
                  : ""
              } mt-4 px-4 py-2  text-white rounded-lg  focus:outline-none`}
              onClick={handleVolver}
            >
              Volver
            </button>
            <a
              className={`${
                theme === "ricoh"
                  ? "bg-rojo hover:bg-rojo/[0.9] "
                  : theme === "epson"
                  ? "bg-epson hover:bg-epson/[0.9]"
                  : ""
              } mt-4 px-4 py-2  text-white rounded-lg  focus:outline-none`}
              target="_blank"
              href={item[0].dataSheet}
            >
              Descargar Folleto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
