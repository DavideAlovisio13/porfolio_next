"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string; // La stringa di parole che vogliamo animare
  className?: string; // Una classe aggiuntiva per il componente (opzionale)
}) => {
  const [scope, animate] = useAnimate(); // Inizializza l'animazione
  let wordsArray = words.split(" "); // Dividi la stringa di parole in un array

  useEffect(() => {
    console.log(wordsArray); // Logga l'array delle parole (utile per debug)
    animate(
      "span", // Seleziona gli <span> per animarli
      {
        opacity: 1, // Imposta l'opacità a 1 per far apparire le parole
      },
      {
        duration: 2, // La durata dell'animazione in secondi
        delay: stagger(0.2), // Applica un ritardo a ciascun <span> con un effetto di 'stagger'
      }
    );
  }, [scope.current]); // Esegui l'animazione quando il riferimento al 'scope' cambia

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx} // Usa la combinazione della parola e dell'indice come chiave univoca
              // Se l'indice è maggiore di 3, cambia il colore del testo a #CBACF9
              className={`${
                idx > 3 ? "color_1" : "dark:text-white text-black"
              } opacity-0`} // Aggiungi le classi per colore e opacità iniziale
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      {/* Modifica la spaziatura esterna */}
      <div className="my-4">
        {/* Rimuovi la classe text-2xl originale */}
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()} {/* Chiama la funzione per visualizzare le parole */}
        </div>
      </div>
    </div>
  );
};
