"use client";

import { FaLocationArrow } from "react-icons/fa6"; // Import dell'icona della freccia di localizzazione
import { projects } from "@/data"; // Import dei dati dei progetti recenti
import { PinContainer } from "./ui/Pin"; // Import del componente PinContainer per contenere ogni progetto

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      {/* Titolo della sezione */}
      <h1 className="heading">
        A small selection of
        <span className="color_1"> recent projects</span>
        {/* Parola evidenziata in viola */}
      </h1>
      {/* Contenitore dei progetti con layout flessibile */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {/* Mappatura dei progetti dal dato 'projects' */}
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id} // Impostazione della chiave unica per ogni progetto
          >
            {/* Componente PinContainer che rappresenta ogni progetto */}
            <PinContainer
              title="Repository"
              // href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                {/* Contenitore dell'immagine di sfondo, con effetto di mascheramento */}
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  {/* Immagine di sfondo per ogni progetto */}
                  <img src="/bg.png" alt="bgimg" />
                </div>
                {/* Immagine principale del progetto */}
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute w-full h-full object-cover"
                />
              </div>

              {/* Titolo del progetto */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              {/* Descrizione del progetto */}
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD", // Colore della descrizione
                  margin: "1vh 0", // Margine verticale
                }}
              >
                {item.des} {/* Descrizione del progetto */}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                {/* Sezione delle icone per le tecnologie o strumenti utilizzati */}
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index} // Chiave unica per ogni icona
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`, // Effetto di spostamento per sovrapporre le icone
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                {/* Sezione per il link al sito live */}
                <div className="flex justify-center items-center">
                  <a href={item.link}>
                    <p className="flex lg:text-xl md:text-xs text-sm color_1">
                      Check repository
                    </p>
                  </a>
                  {/* Icona della freccia che indica il link */}
                  <FaLocationArrow className="ms-3" color="#c0ed06" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
