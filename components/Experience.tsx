import React from "react";

import { workExperience } from "@/data"; // Import dei dati dell'esperienza lavorativa
import { Button } from "./ui/MovingBorders"; // Import del componente Button per gestire il pulsante con bordi in movimento

const Experience = () => {
  return (
    <div className="py-20 w-full" id="about-me">
      <h1 className="heading">
        My <span className="color_1">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {/* Mappa ogni esperienza lavorativa e crea un bottone con effetto di bordo in movimento */}
        {workExperience.map((card) => (
          <Button
            key={card.id} // Imposta la chiave unica per ogni card
            // Durata random per l'animazione del bordo, si può anche personalizzare
            duration={Math.floor(Math.random() * 10000) + 10000} // Genera una durata casuale tra 10.000 e 20.000 millisecondi
            borderRadius="1.75rem" // Raggio del bordo per arrotondare gli angoli
            style={{
              // Background con gradiente lineare per l'effetto visivo
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // Aggiungi il raggio del bordo per dare un effetto più arrotondato e realistico al bordo in movimento
              borderRadius: `calc(1.75rem* 0.96)`, // Leggero aggiustamento del border-radius
            }}
            // Aggiungi una classe CSS per definire il colore del testo e il bordo
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {/* Struttura del contenuto all'interno del pulsante */}
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              {/* Immagine di anteprima dell'esperienza lavorativa */}
              <img
                src={card.thumbnail} // Immagine da caricare
                alt={card.thumbnail} // Alt text per l'immagine
                className="lg:w-32 md:w-20 w-16" // Imposta la larghezza dell'immagine in base alla risoluzione
              />
              <div className="lg:ms-5">
                {/* Data di inizio o periodo dell'esperienza */}
                <p className="flex justify-end pb-4 font-bold">{card.date}</p>
                {/* Titolo dell'esperienza lavorativa */}
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                {/* Descrizione breve dell'esperienza */}
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
