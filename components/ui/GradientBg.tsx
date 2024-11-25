"use client";

import { cn } from "../../utils/cn"; // Utility per concatenare classi condizionali
import { useEffect, useRef, useState } from "react";

// Componente per creare un'animazione con gradienti dinamici sullo sfondo
export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)", // Colore iniziale del gradiente di sfondo
  gradientBackgroundEnd = "rgb(0, 17, 82)", // Colore finale del gradiente di sfondo
  firstColor = "18, 113, 255", // Primo colore per i gradienti animati
  secondColor = "221, 74, 255", // Secondo colore per i gradienti animati
  thirdColor = "100, 220, 255", // Terzo colore per i gradienti animati
  fourthColor = "200, 50, 50", // Quarto colore per i gradienti animati
  fifthColor = "180, 180, 50", // Quinto colore per i gradienti animati
  pointerColor = "140, 100, 255", // Colore del gradiente interattivo (seguendo il puntatore)
  size = "80%", // Dimensione dei gradienti animati
  blendingValue = "hard-light", // Modalità di fusione per i gradienti
  children, // Contenuto figlio del componente
  className, // Classi personalizzate per il contenitore interno
  interactive = true, // Attiva o disattiva l'interattività con il puntatore
  containerClassName, // Classi personalizzate per il contenitore esterno
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null); // Riferimento all'elemento interattivo
  const [curX, setCurX] = useState(0); // Posizione corrente X del puntatore
  const [curY, setCurY] = useState(0); // Posizione corrente Y del puntatore
  const [tgX, setTgX] = useState(0); // Target X per il movimento del puntatore
  const [tgY, setTgY] = useState(0); // Target Y per il movimento del puntatore

  // Imposta i colori e altre proprietà CSS personalizzate al caricamento del componente
  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, []);

  // Anima il movimento dell'elemento interattivo basato sulla posizione del puntatore
  useEffect(() => {
    function move() {
      if (!interactiveRef.current) return;
      setCurX(curX + (tgX - curX) / 20); // Smussa il movimento in X
      setCurY(curY + (tgY - curY) / 20); // Smussa il movimento in Y
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`; // Applica la trasformazione
    }
    move();
  }, [tgX, tgY]);

  // Aggiorna i target di movimento in base alla posizione del mouse
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect(); // Ottiene le dimensioni del contenitore
      setTgX(event.clientX - rect.left); // Calcola il target X relativo
      setTgY(event.clientY - rect.top); // Calcola il target Y relativo
    }
  };

  // Rileva se il browser in uso è Safari
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)); // Regex per rilevare Safari
  }, []);

  return (
    <div
      className={cn(
        // Contenitore principale con gradiente di sfondo
        "w-full h-full absolute overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      {/* Filtro SVG per creare un effetto "gooey" */}
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      {/* Contenuto passato come figlio */}
      <div className={cn("", className)}>{children}</div>

      {/* Contenitore dei gradienti animati */}
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        {/* Gradienti animati */}
        {["first", "second", "third", "fourth", "fifth"].map((color, index) => (
          <div
            key={index}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--${color}-color),_0.8)_0,_rgba(var(--${color}-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
              `animate-${color}`,
              "opacity-100"
            )}
          ></div>
        ))}
        {/* Gradienti interattivi */}
        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              "opacity-70"
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
