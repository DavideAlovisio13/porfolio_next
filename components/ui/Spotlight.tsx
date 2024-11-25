import { cn } from "../../utils/cn";
import React from "react";

// Tipo delle proprietà che accetta il componente Spotlight
type SpotlightProps = {
  className?: string; // Classe personalizzata opzionale
  fill?: string; // Colore di riempimento opzionale per l'ellisse
};

// Componente Spotlight che crea un'animazione di luce
export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        // Classi di stile di base per l'animazione e la posizione dell'elemento
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className // Applica eventuali classi aggiuntive passate come prop
      )}
      xmlns="http://www.w3.org/2000/svg" // Definisce lo spazio dei nomi per il file SVG
      viewBox="0 0 3787 2842" // Definisce la vista dell'SVG
      fill="none" // Evita il riempimento di tutto l'SVG di default
    >
      <g filter="url(#filter)">
        {/* Gruppo con filtro applicato */}
        <ellipse
          cx="1924.71" // Posizione X del centro dell'ellisse
          cy="273.501" // Posizione Y del centro dell'ellisse
          rx="1924.71" // Raggio orizzontale dell'ellisse
          ry="273.501" // Raggio verticale dell'ellisse
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" // Trasformazione (rotazione e deformazione)
          fill={fill || "white"} // Colore di riempimento dell'ellisse (di default bianco se non specificato)
          fillOpacity="0.21" // Opacità del riempimento
        ></ellipse>
      </g>
      <defs>
        {/* Definizioni per filtri e effetti */}
        <filter
          id="filter" // ID per il filtro applicato
          x="0.860352" // Posizione orizzontale del filtro
          y="0.838989" // Posizione verticale del filtro
          width="3785.16" // Larghezza del filtro
          height="2840.26" // Altezza del filtro
          filterUnits="userSpaceOnUse" // Usa le unità di spazio utente per il filtro
          colorInterpolationFilters="sRGB" // Imposta il tipo di interpolazione del colore per il filtro
        >
          {/* Filtro di sfondo trasparente */}
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          {/* Filtro di fusione per combinare il filtro con l'immagine */}
          <feBlend
            mode="normal" // Modalità di fusione
            in="SourceGraphic" // Fonte grafica su cui applicare il filtro
            in2="BackgroundImageFix" // Sorgente di fusione
            result="shape" // Risultato della fusione
          ></feBlend>
          {/* Aggiunge un effetto di sfocatura gaussiane sull'ellisse */}
          <feGaussianBlur
            stdDeviation="151" // Intensità della sfocatura
            result="effect1_foregroundBlur_1065_8" // Risultato della sfocatura
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
