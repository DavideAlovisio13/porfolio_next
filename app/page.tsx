"use client"; // Indica che il file deve essere eseguito sul lato client (React).

// Importa i dati di navigazione e i componenti utilizzati nella pagina.
import { navItems } from "@/data";

import Hero from "@/components/Hero"; // Componente per la sezione introduttiva.
import Footer from "@/components/Footer"; // Componente per il footer della pagina.
import Approach from "@/components/Approach"; // Componente per descrivere l'approccio.
import Experience from "@/components/Experience"; // Componente che evidenzia l'esperienza.
import RecentProjects from "@/components/RecentProjects"; // Componente per i progetti recenti.
import { FloatingNav } from "@/components/ui/FloatingNavbar"; // Barra di navigazione flottante.

const Home = () => {
  return (
    // Contenitore principale della pagina con classi per il layout e lo stile.
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Contenitore con larghezza massima e centrato */}
      <div className="max-w-7xl w-full">
        {/* Barra di navigazione flottante */}
        <FloatingNav navItems={navItems} />
        {/* Sezioni principali della pagina */}
        <Hero /> {/* Sezione introduttiva */}
        {/* <Grid /> Visualizzazione a griglia */}
        <RecentProjects /> {/* Progetti recenti */}
        {/* <Clients /> Clienti */}
        <Experience /> {/* Esperienza */}
        <Approach /> {/* Approccio */}
        <Footer /> {/* Footer */}
      </div>
    </main>
  );
};

export default Home; // Esporta il componente Home come predefinito.
