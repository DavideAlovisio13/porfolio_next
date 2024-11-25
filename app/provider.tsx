// "use client" indica che questo file è destinato al rendering lato client in un'applicazione Next.js.
"use client";

// Importa React per utilizzare la sintassi JSX e creare componenti React.
import * as React from "react";

// Importa il provider dei temi da "next-themes", che gestisce i temi (ad esempio, chiaro/scuro) nell'applicazione.
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Importa il tipo delle proprietà per il ThemeProvider, utile per fornire un typing forte nel TypeScript.
import { type ThemeProviderProps } from "next-themes";

// Definisce il componente ThemeProvider, che avvolge l'applicazione con il contesto dei temi.
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Ritorna il provider dei temi (NextThemesProvider) che avvolge i figli (children).
  // Passa tutte le proprietà ricevute (props) direttamente al NextThemesProvider.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
