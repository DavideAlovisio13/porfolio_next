"use client";
import React, { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

// Tipo che definisce le direzioni di movimento per il bordo
type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children, // Contenuto da visualizzare nel componente
  containerClassName, // Classe del contenitore
  className, // Classe del contenuto
  as: Tag = "button", // Tipo di tag HTML, di default è un "button"
  duration = 1, // Durata dell'animazione (in secondi)
  clockwise = true, // Determina la direzione del movimento (orario o antiorario)
  ...props // Altri props passati al componente
}: React.PropsWithChildren<
  {
    as?: React.ElementType; // Tipo di elemento HTML
    containerClassName?: string; // Classe per il contenitore
    className?: string; // Classe per il contenuto
    duration?: number; // Durata dell'animazione
    clockwise?: boolean; // Direzione dell'animazione
  } & React.HTMLAttributes<HTMLElement> // Altri attributi HTML
>) {
  // Stato che determina se il componente è hoverato o meno
  const [hovered, setHovered] = useState<boolean>(false);

  // Stato che mantiene la direzione attuale dell'animazione
  const [direction, setDirection] = useState<Direction>("TOP");

  // Funzione per determinare la direzione successiva in base alla direzione attuale e all'orientamento (orario o antiorario)
  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length // Movimento orario
      : (currentIndex + 1) % directions.length; // Movimento antiorario
    return directions[nextIndex];
  };

  // Mappa delle direzioni e dei relativi gradienti
  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  // Gradiente per l'animazione dell'effetto di hover
  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  // Effetto che cambia direzione ogni 'duration' secondi, quando non è hoverato
  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState)); // Cambia direzione
      }, duration * 1000);
      return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
    }
  }, [hovered]);

  return (
    <Tag
      // Gestione degli eventi di mouse enter e mouse leave per attivare/disattivare l'effetto hover
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true); // Attiva l'hover
      }}
      onMouseLeave={() => setHovered(false)} // Disattiva l'hover
      className={cn(
        "relative flex rounded-full border  content-center bg-black/20 hover:bg-black/10 transition duration-500  items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props} // Propagazione degli altri attributi
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children} {/* Contenuto da visualizzare */}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)", // Effetto sfocato per l'animazione
          position: "absolute",
          width: "100%", // Occupa tutta la larghezza
          height: "100%", // Occupa tutta l'altezza
        }}
        initial={{ background: movingMap[direction] }} // Gradiente iniziale
        animate={{
          background: hovered
            ? [movingMap[direction], highlight] // Gradiente in caso di hover
            : movingMap[direction], // Gradiente senza hover
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }} // Transizione
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}
