"use client";

import React from "react";

import { companies, testimonials } from "@/data"; // Import dei dati delle aziende e delle testimonianze
import { InfiniteMovingCards } from "./ui/InfiniteCards"; // Import del componente InfiniteMovingCards per le testimonianze

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
      Kind words from
      <span className="color_1"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // Rimuovi il background bianco e dark:bg-black dark:bg-grid-white/[0.05],
          // imposta h-[50vh] (50% dell'altezza della vista)
          // riduci l'altezza a 30rem per il design responsivo
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          {/* Componente che mostra le testimonianze con uno scroll infinito */}
          <InfiniteMovingCards
            items={testimonials} // Passa le testimonianze come props
            direction="right" // Direzione dello scorrimento
            speed="slow" // Velocità dello scorrimento
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {/* Mappa le aziende e visualizza i loro loghi */}
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                {/* Mostra il logo aziendale */}
                <img
                  src={company.img}
                  alt={company.name} // Descrizione dell'immagine
                  className="md:w-10 w-5" // Imposta la larghezza in modo responsivo
                />
                {/* Mostra un altro logo o immagine (come il nome dell'azienda) */}
                <img
                  src={company.nameImg}
                  alt={company.name} // Descrizione dell'immagine
                  width={company.id === 4 || company.id === 5 ? 100 : 150} // Imposta la larghezza in modo condizionale per alcune aziende
                  className="md:w-24 w-20" // Imposta la larghezza dell'immagine
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
