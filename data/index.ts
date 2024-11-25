import { link } from "fs";

export const navItems = [
  { name: "Home", link: "" },
  { name: "Projects", link: "#projects" },
  { name: "About Me", link: "#about-me" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Hi, I'm Davide Alovisio",
    description:
      "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end text-3xl font-bold",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zones",
    description:
      "Open to collaborating with clients and teams across different time zones to ensure smooth communication and project success.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start text-lg",
    img: "/collaboration.png",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description:
      "Proficient in HTML, CSS, JavaScript, React, and Node.js. Currently exploring TypeScript and backend frameworks like Express.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "rounded-lg",
    titleClassName: "justify-center text-lg font-bold",
    img: "/programmation.png",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about Development",
    description:
      "I love solving challenging problems and turning ideas into functional and efficient code.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start text-lg",
    img: "/passion.png",
    spareImg: "",
  },
  {
    id: 5,
    title: "Currently work on my Projects",
    description:
      "Currently, I am working on my projects, focusing on innovative solutions and reusable components for the web.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName:
      "justify-center md:justify-start lg:justify-center text-lg font-bold",
    img: "/projects.png",
    spareImg: "",
  },
  {
    id: 6,
    title: "Want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center text-lg",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Laravel DC Comics",
    des: "The project involves the reconstruction of the website dedicated to the world of DC Comics using Laravel. The user interface, designed to be faithful to the original, allows the comics to be displayed in a main list. Users can access the Comics section through the navigation bar to explore a more detailed list, with specific information about each title.",
    img: "/dc-main.png",
    iconLists: ["/html-5.svg", "/sass.svg", "/javascript.svg", "/laravel.svg", "/php.svg"],
    link: "https://github.com/DavideAlovisio13/laravel-dc-comics",
  },
  {
    id: 2,
    title: "BoolXtravel",
    des: "BoolXtravel is a web application developed with Laravel that simulates a fictional space travel company. The application allows users to explore space travel, sign up for custom features, and view interactive details about available planets and space destinations. The platform includes an input-based search, a homepage introducing the company, and a section dedicated to describing the various space trips, with the addition of advanced visual effects using three.js.",
    img: "/bollxtravel.png",
    iconLists: ["/html-5.svg", "/sass.svg", "/javascript.svg", "/three.js.png", "/php.svg"],
    link: "https://github.com/Valerio-Catellani/space-repo",
  },
  {
    id: 3,
    title: " Boolflix",
    des: "Replica of a Netflix-inspired streaming service developed to practice using API calls. The application creatively rewrites the user interface, with a home page that displays the latest, most popular movies and series and offers a browsing experience similar to that of the original platform.",
    img: "/bollflix.png",
    iconLists: ["/html-5.svg", "/sass.svg", "/javascript.svg", "vuejs.svg" ],
    link: "https://github.com/DavideAlovisio13/vite-boolflix",
  },
  {
    id: 4,
    title: "Boolzapp",
    des: "Implementation of a messaging web app inspired by the WhatsApp application. The platform allows interactive chat management, with the ability to send and receive messages, including emoji. Users can delete sent messages, as in the original version of WhatsApp.",
    img: "/boolzapp.png",
    iconLists: ["/html-5.svg", "/sass.svg", "/javascript.svg", "vuejs.svg" ],
    link: "https://github.com/DavideAlovisio13/vue-boolzapp",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    date: "2024 - NOW",
    title: "Jr Full-Stack Web Developer Trainee",
    desc: "Full-time telematics training course aimed at the study related to the development and maintenance of complex web applications",
    className: "md:col-span-2",
    thumbnail: "/telecommuting.png",
  },
  {
    id: 2,
    date: "2017 - 2024",
    title: "Skilled Worker - Safety Officer",
    desc: "Significant experience, in which I served as a Skilled Laborer within the high-precision bearing production line.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/technician.png",
  },
  {
    id: 3,
    date: "2014 - 2017",
    title: "Bartender - Tobacco sales",
    desc: "In this role, I gained extensive experience in a dynamic and customer-oriented environment, honing my skills in bar service and managing tobacco shop operations",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/bar.png",
  },
  {
    id: 4,
    date: "2010 - 2014",
    title: "Volunteer - Child care worker",
    desc: "During my time as an entertainer, I had the opportunity to conduct recreational activities for children and youth of all ages",
    className: "md:col-span-2",
    thumbnail: "/coll.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/DavideAlovisio13",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/davide-alovisio/",
    img: "/link.svg",
  },
];

export const images = [
  {
    id: 1,
    image: "/logo_back.png",

  }
]