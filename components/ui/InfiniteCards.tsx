"use client";

import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";

// Componente che crea uno scroller infinito di "cards" (schede) con citazioni
export const InfiniteMovingCards = ({
  items, // Lista di oggetti con citazione, nome e titolo
  direction = "left", // Direzione dello scorrimento (sinistra o destra)
  speed = "fast", // Velocità dello scorrimento (veloce, normale, lenta)
  pauseOnHover = true, // Se il movimento deve fermarsi al passaggio del mouse
  className, // Classe CSS aggiuntiva per il contenitore
}: {
  items: {
    quote: string; // Citazione
    name: string; // Nome della persona
    title: string; // Titolo della persona
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null); // Riferimento al contenitore del carosello
  const scrollerRef = React.useRef<HTMLUListElement>(null); // Riferimento alla lista che scorre

  // Effetto per aggiungere l'animazione quando il componente è montato
  useEffect(() => {
    addAnimation();
  }, []);

  // Stato che indica se l'animazione è partita
  const [start, setStart] = useState(false);

  // Funzione per duplicare gli elementi per creare l'effetto di scorrimento infinito
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children); // Ottieni gli elementi della lista

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true); // Duplica ogni elemento
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem); // Aggiungi l'elemento duplicato alla fine
        }
      });

      getDirection(); // Imposta la direzione dello scorrimento
      getSpeed(); // Imposta la velocità dello scorrimento
      setStart(true); // Avvia l'animazione
    }
  }

  // Funzione per impostare la direzione dello scorrimento
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards" // Direzione a sinistra
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse" // Direzione a destra
        );
      }
    }
  };

  // Funzione per impostare la velocità dello scorrimento
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s"); // Velocità veloce
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s"); // Velocità normale
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s"); // Velocità lenta
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className // Classe CSS personalizzata
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap", // Stile di base per lo scroller
          start && "animate-scroll", // Applica l'animazione se è iniziata
          pauseOnHover && "hover:[animation-play-state:paused]" // Ferma l'animazione al passaggio del mouse
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)", // Colore di sfondo
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)", // Gradiente di sfondo
            }}
            key={idx} // Usa l'indice come chiave unica
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                {item.quote} {/* Visualizza la citazione */}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                {/* Immagine del profilo */}
                <div className="me-3">
                  <img src="/profile.svg" alt="profile" />
                </div>
                <span className="flex flex-col gap-1">
                  <span className="text-xl font-bold leading-[1.6] text-white">
                    {item.name} {/* Visualizza il nome */}
                  </span>
                  <span className="text-sm leading-[1.6] text-white-200 font-normal">
                    {item.title} {/* Visualizza il titolo */}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
