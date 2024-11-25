"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../utils/cn";
import { Button } from "./MovingBorders";

// Tipo di dati per rappresentare una Card
type Card = {
  id: number; // ID univoco per la card
  content: JSX.Element | React.ReactNode | string; // Contenuto da visualizzare quando la card è selezionata
  className: string; // Classe CSS personalizzata per la card
  thumbnail: string; // URL dell'immagine in miniatura della card
};

// Componente LayoutGrid che mostra un grid di card
export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null); // Stato per la card selezionata
  const [lastSelected, setLastSelected] = useState<Card | null>(null); // Stato per la card precedentemente selezionata

  // Funzione che gestisce il click su una card
  const handleClick = (card: Card) => {
    setLastSelected(selected); // Salva la card selezionata precedentemente
    setSelected(card); // Imposta la nuova card come selezionata
  };

  // Funzione che gestisce il click al di fuori della card selezionata per deselezionarla
  const handleOutsideClick = () => {
    setLastSelected(selected); // Salva la card selezionata precedentemente
    setSelected(null); // Deseleziona la card
  };

  return (
    // Layout a griglia con 4 colonne per schermi medi e superiori
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto gap-10 ">
      {cards.map((card, i) => (
        <Button
          key={i} // Chiave univoca per ogni bottone
          borderRadius="1.75rem" // Raggio del bordo per il bottone
          duration={10000} // Durata dell'animazione
          className={cn(
            card.className // Classe CSS personalizzata per la card
          )}
        >
          <div
            className={cn(
              card.className,
              "relative border-3 border-yellow-500" // Aggiungi un bordo giallo attorno alla card
            )}
          >
            <motion.div
              onClick={() => handleClick(card)} // Gestisce il click sulla card
              className={cn(
                card.className,
                "relative overflow-hidden", // Stili di base per la card
                selected?.id === card.id
                  ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col" // Quando la card è selezionata
                  : lastSelected?.id === card.id
                  ? "z-40 bg-white rounded-xl h-full w-full" // Quando la card è stata selezionata in precedenza
                  : "bg-white rounded-xl h-full w-full" // Card non selezionata
              )}
              layout
            >
              {selected?.id === card.id && <SelectedCard selected={selected} />}
              <BlurImage card={card} />
            </motion.div>
          </div>
        </Button>
      ))}
      <motion.div
        onClick={handleOutsideClick} // Gestisce il click al di fuori per deselezionare
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none" // Abilita i click solo quando una card è selezionata
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }} // Opacità per la sovrapposizione del fondale
      />
    </div>
  );
};

// Componente per visualizzare l'immagine della card con effetto blur
const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false); // Stato che indica se l'immagine è stata caricata
  return (
    <Image
      src={card.thumbnail} // URL dell'immagine della miniatura
      height="100" // Altezza dell'immagine
      width="100" // Larghezza dell'immagine
      onLoad={() => setLoaded(true)} // Imposta lo stato su "loaded" quando l'immagine è caricata
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200", // Impostazioni per il comportamento dell'immagine
        loaded ? "blur-none" : "blur-md" // Applica l'effetto blur prima che l'immagine sia caricata
      )}
      alt="thumbnail" // Descrizione dell'immagine
    />
  );
};

// Componente per mostrare il contenuto della card selezionata
const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0, // Impostazione iniziale dell'opacità
        }}
        animate={{
          opacity: 0.6, // Impostazione finale dell'opacità
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10" // Sovrapposizione scura per il fondo
      />
      <motion.div
        initial={{
          opacity: 0, // Inizialmente l'elemento è invisibile
          y: 100, // Si sposta verticalmente verso il basso
        }}
        animate={{
          opacity: 1, // L'elemento diventa visibile
          y: 0, // Torna nella sua posizione originale
        }}
        transition={{
          duration: 0.3, // Durata della transizione
          ease: "easeInOut", // Tipo di transizione
        }}
        className="relative px-8 pb-4 z-[70]" // Posizionamento del contenuto della card
      >
        {selected?.content} {/* Contenuto della card selezionata */}
      </motion.div>
    </div>
  );
};
