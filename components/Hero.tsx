import { FaLocationArrow } from "react-icons/fa6"; // Import dell'icona di localizzazione
import { VscBracketDot } from "react-icons/vsc"; // Import dell'icona del bracket
import MagicButton from "./MagicButton"; // Import del componente MagicButton
import { Spotlight } from "./ui/Spotlight"; // Import del componente Spotlight per gli effetti visivi
import { TextGenerateEffect } from "./ui/TextGenerateEffect"; // Import del componente TextGenerateEffect per effetti sul testo
import { AnimatedTooltip } from "./ui/AnimatedTool";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       * UI: Spotlights
       * Effetti visivi di spotlight per dare un aspetto dinamico alla pagina
       * Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        {/* Spotlight bianco */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        {/* Spotlight viola */}
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#c0ed06"
        />
        {/* Spotlight blu */}
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#393BB2"
        />
      </div>

      {/**
       * UI: grid
       * Cambia il colore di sfondo a bg-black-100 e riduci il colore della griglia da
       * 0.2 a 0.03 per un aspetto più sottile.
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient per il contenitore, che dà un effetto sfumato */}
        <div
          // Cambia il colore di sfondo a bg-black-100, per farlo corrispondere al colore di sfondo e renderlo uniforme
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <AnimatedTooltip  />
          {/**
           * UI: TextGenerateEffect
           * Effetto di generazione di testo dinamico che appare progressivamente
           * Link: https://ui.aceternity.com/components/text-generate-effect
           * Cambia la dimensione del testo per la versione mobile
           */}
          <TextGenerateEffect
            words="From an idea to an interactive reality: your project, my commitment."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          {/* Descrizione breve dell'autore */}
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
            Hi! I&apos;m Davide, a Full-Stack Web Developer based in Italy.
          </p>

          {/* Pulsante che linka alla sezione 'about' per visualizzare il lavoro */}
          <a href="#projects">
            <MagicButton
              title="Show my work" // Testo del pulsante
              icon={<FaLocationArrow />} // Icona della freccia
              position="right" // Posizione dell'icona
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
