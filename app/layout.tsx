// Importa il tipo `Metadata` da Next.js per definire i metadati della pagina
import type { Metadata } from "next";

// Importa il provider del tema per gestire i temi dell'applicazione
import { ThemeProvider } from "./provider";

// Importa il modulo per la gestione di font locali
import localFont from "next/font/local";

// Importa gli stili globali CSS
import "./globals.css";

// Definizione del font personalizzato "Geist Sans"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Percorso al file del font
  variable: "--font-geist-sans", // Variabile CSS per il font
  weight: "100 900", // Range dei pesi disponibili per il font
});

// Definizione del font personalizzato "Geist Mono"
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Percorso al file del font
  variable: "--font-geist-mono", // Variabile CSS per il font
  weight: "100 900", // Range dei pesi disponibili per il font
});

// Definizione dei metadati della pagina, utilizzati per il SEO e la personalizzazione
export const metadata: Metadata = {
  title: "Davide's Portfolio", // Titolo della pagina
  description: "Modern portfolio", // Descrizione della pagina
};

// Layout principale dell'applicazione
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // I figli del componente rappresentano il contenuto della pagina
}>) {
  return (
    <html lang="en"> {/* Imposta la lingua del documento come inglese */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} // Applica le variabili dei font e l'anti-aliasing
        id="home" // ID per il tag body, utile per scopi di stile o JavaScript
      >
        {/* Configura il ThemeProvider per gestire il tema dell'applicazione */}
        <ThemeProvider
          attribute="class" // Utilizza le classi CSS per definire il tema
          defaultTheme="dark" // Imposta il tema predefinito su "dark"
          enableSystem // Consente l'uso del tema di sistema (ad esempio, tema chiaro o scuro)
          disableTransitionOnChange // Disabilita le transizioni durante il cambio di tema
        >
          {children} {/* Rendering del contenuto passato al layout */}
        </ThemeProvider>
      </body>
    </html>
  );
}
