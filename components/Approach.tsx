import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EvervaultCard } from "./ui/CardHover";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading text-white">
        My <span className="color_1">main skills</span>
      </h1>
      {/* Rimuovi il background bianco e dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* Aggiungi la prop des per la descrizione */}
        <Card
          title="Dynamic Adaptability"
          icon={<AceternityIcon order="1" />}
          des="Dynamic adaptability is the ability to respond quickly and effectively to changes and unexpected situations. This soft skill involves flexibility, creativity, and a solution-oriented attitude. People with this skill can reorganize priorities, learn new skills, and face challenges with resilience and positivity. It is particularly valuable in fast-paced work environments or crisis situations."
        />
        <Card
          title="Proactive Problem Solving"
          icon={<AceternityIcon order="2" />}
          des="Proactive problem solving is the ability to identify potential issues before they occur and develop preventive solutions. This soft skill combines critical analysis, creativity, and personal initiative. Those who possess this ability anticipate needs, assess risks, and propose targeted strategies, increasing efficiency and reducing unforeseen problems. It is especially useful in contexts where planning and innovation are crucial for success."
        />
        <Card
          title="Teamwork"
          icon={<AceternityIcon order="3" />}
          des="Teamwork is the ability to collaborate effectively with others to achieve common goals. This soft skill requires open communication, active listening, empathy, and the ability to recognize and leverage the strengths of other team members. A person with strong teamwork skills can create a positive environment, resolve conflicts, and contribute to collective success while maintaining a collaborative and respectful attitude."
        />
      </div>
    </section>
  );
};

export default Approach;

// Component Card che rappresenta ogni competenza con titolo, icona e descrizione
const Card = ({
  title,
  icon,
  children,
  // Aggiungi la prop des per la descrizione
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Aggiungi le classi per l'altezza e il bordo arrotondato
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
      style={{
        // Aggiungi il gradient per lo sfondo
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Aggiungi icone agli angoli */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      {/* Animazione per mostrare la descrizione al passaggio del mouse */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // Centra l'icona all'interno del contenitore
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <div>
          <h2
            // Modifica il titolo per il centro
            className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          >
            {title}
          </h2>
          {/* Aggiungi la descrizione */}
          <p
            className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
            style={{ color: "#E4ECFF" }}
          >
            {des}
          </p>
        </div>
      </div>
      <EvervaultCard text="Innovation" className="lg:h-[35rem] absolute" />
    </div>
  );
};

// Icona personalizzata per ogni fase
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* Bottone con effetto di animazione con sfondo conic gradient */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#c0ed06_0%,#393BB2_50%,#c0ed06_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 color_1 backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

// Icona di base usata per le icone sugli angoli
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
