import { FaLocationArrow } from "react-icons/fa6"; // Import dell'icona di localizzazione da react-icons
import { socialMedia } from "@/data"; // Import dei dati dei social media
import MagicButton from "./MagicButton"; // Import del componente MagicButton
import { IoCopyOutline } from "react-icons/io5";

const handleDownloadCVIta = () => {
  const link = document.createElement("a");
  link.href = "/ITA.pdf"; // Percorso del file PDF nella cartella `public`
  link.download = "ITA_CV.pdf"; // Nome del file scaricato
  link.click();
};
const Footer = () => {
  return (
    <div>
      <footer className="w-full pt-20 pb-10" id="contact">
        {/* Sfondo con una griglia che si posiziona dietro il contenuto del footer */}
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <img
            src="/footer-grid.svg" // Immagine della griglia
            alt="grid" // Alt text per l'immagine
            className="w-full h-full opacity-50" // Imposta la larghezza e altezza al 100% e trasparenza al 50%
          />
        </div>

        <div className="flex flex-col items-center">
          {/* Titolo con una domanda per stimolare l'interesse dell'utente */}
          <h1 className="heading lg:max-w-[45vw]">
            More<span className="color_1"> information</span> ?
          </h1>
          {/* Descrizione che invita l'utente a mettersi in contatto */}
          <p className="text-white-200 md:mt-10 my-5 text-center">
          Download my CV here, or contact me for more info
          </p>
          {/* Pulsante per inviare una email */}
          <a href="mailto:alovisiod@gmail.com">
            <MagicButton
              title="Send me an email" // Titolo del pulsante
              icon={<FaLocationArrow />} // Icona della freccia
              position="right" // Posizione dell'icona all'interno del pulsante
            />
          </a>
          <MagicButton
            title="Download my Italian CV"
            icon={<IoCopyOutline />}
            position="left"
            handleClick={handleDownloadCVIta}
            otherClasses="!bg-[#161A31]"
          />
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          {/* Sezione per i social media */}
          <div className="flex items-center md:gap-3 gap-6">
            {/* Mappatura dei social media e creazione di un link per ciascuno */}
            {socialMedia.map((info) => (
              <a href={info.link} key={info.id}>
                <div
                  key={info.id} // Imposta la chiave unica per ogni icona
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  {/* Icona del social media */}
                  <img src={info.img} alt="icons" width={20} height={20} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
