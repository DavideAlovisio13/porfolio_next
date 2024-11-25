"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "../../utils/cn";

// Componente Button che crea un bottone con bordi animati
export function Button({
  borderRadius = "1.75rem", // Raggio del bordo del bottone
  children, // Contenuto del bottone (es. testo o altro componente)
  as: Component = "button", // Tipo di componente da usare, di default è "button"
  containerClassName, // Classe CSS per il contenitore del bottone
  borderClassName, // Classe CSS per il bordo animato
  duration, // Durata dell'animazione del bordo
  className, // Classe CSS per il contenuto del bottone
  ...otherProps // Altri props da passare al componente
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1", // Stili di base per il contenitore del bottone
        containerClassName // Classe CSS personalizzata per il contenitore
      )}
      style={{
        borderRadius: borderRadius, // Impostazione del raggio del bordo
      }}
      {...otherProps} // Passaggio degli altri props al componente
    >
      <div
        className="absolute inset-0 rounde-[1.75rem]" // Posizionamento assoluto per il bordo animato
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }} // Impostazione del raggio del bordo del contenitore
      >
        {/* Componente MovingBorder per l'animazione del bordo */}
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#c0ed06_40%,transparent_60%)]", // Stile per l'elemento che forma il bordo animato
              borderClassName // Classe CSS personalizzata per il bordo animato
            )}
          />
        </MovingBorder>
      </div>

      {/* Contenuto del bottone */}
      <div
        className={cn(
          "relative bg-slate-900/[0.] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased", // Stili per il contenuto del bottone
          className // Classe CSS personalizzata per il contenuto
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`, // Raggio del bordo del contenuto del bottone
        }}
      >
        {children} {/* Renderizza il contenuto del bottone */}
      </div>
    </Component>
  );
}

// Componente MovingBorder che gestisce l'animazione del bordo del bottone
export const MovingBorder = ({
  children,
  duration = 2000, // Durata dell'animazione del bordo
  rx, // Raggio del bordo lungo l'asse X
  ry, // Raggio del bordo lungo l'asse Y
  ...otherProps // Altri props da passare al componente
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>(); // Riferimento al percorso SVG del bordo
  const progress = useMotionValue<number>(0); // Variabile di stato per tracciare il progresso dell'animazione

  // Funzione che aggiorna il progresso dell'animazione per ogni fotogramma
  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength(); // Ottiene la lunghezza del percorso SVG
    if (length) {
      const pxPerMillisecond = length / duration; // Calcola quanti pixel per millisecondo deve muoversi l'animazione
      progress.set((time * pxPerMillisecond) % length); // Imposta il progresso dell'animazione
    }
  });

  // Trasformazioni per il movimento lungo il percorso SVG
  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x // Calcola la posizione X lungo il percorso
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y // Calcola la posizione Y lungo il percorso
  );

  // Template per applicare le trasformazioni al movimento
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      {/* SVG che rappresenta il percorso animato per il bordo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full" // SVG deve coprire tutto lo spazio disponibile
        width="100%" // Larghezza dell'SVG
        height="100%" // Altezza dell'SVG
        {...otherProps} // Altri props passati al componente
      >
        <rect
          fill="none"
          width="100%" // Larghezza del rettangolo SVG
          height="100%" // Altezza del rettangolo SVG
          rx={rx} // Raggio del bordo lungo l'asse X
          ry={ry} // Raggio del bordo lungo l'asse Y
          ref={pathRef} // Riferimento al rettangolo SVG per il calcolo del percorso
        />
      </svg>
      {/* Elemento che si muove lungo il percorso definito */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform, // Applica le trasformazioni per il movimento lungo il percorso
        }}
      >
        {children} {/* Renderizza i figli all'interno del movimento */}
      </motion.div>
    </>
  );
};
