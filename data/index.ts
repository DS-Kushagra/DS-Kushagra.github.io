import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Connect", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Feel free for collaboration",
    description: "",
    className: "lg:col-span-2 md:col-span-5 md:row-span-2 lg:min-h-[50vh]",
    imgClassName: "w-full h-full opacity-95",
    titleClassName: "justify-end",
    img: "/Collab.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full opacity-20",
    titleClassName: "justify-start",
    img: "/timezone.png",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I try to improve my skills everyday",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full opacity-35",
    titleClassName: "justify-center",
    img: "/Linkedin.png",
    spareImg: "",
  },
  {
    id: 4,
    title: "Budding Data Scientist, looking for opportunity",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full ",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning ML Algorithms",
    description: "The Inside Scoop",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full opacity-30",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/DA.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-3 lg:row-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Voice Assistant Project",
    des: "Give it a task and enjoy the services it offers to you",
    img: "AI.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/DS-Kushagra/Jarvis-Voice-Assistant-Project",
  },
  {
    id: 2,
    title: "Social Media Usage Analysis",
    des: "Analyzes social media data to track usage and engagement.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/DS-Kushagra/Social-Media-Analysis-Project",
  },
  {
    id: 3,
    title: "Job Scrapping",
    des: "It provides a basic template for web scraping job listings. Depending on the website's structure, you may need to adjust the HTML element classes or add error handling and more sophisticated scraping logic",
    img: "/WS.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/DS-Kushagra/Job-Scrapping-Project",
  },
  {
    id: 4,
    title: "AI Chatbot your own AI friend",
    des: "Your own AI friend help you with all your solutions",
    img: "Chat.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/DS-Kushagra/AI-ChatBot",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Kushagra has been a fantastic experience. He took the time to understand our needs and delivered a solution that exceeded our expectations. His ability to combine technical expertise with creativity is truly impressive.",
    name: "Liam D.",
    title: "CEO of Future Vision",
  },
  {
    quote:
      "Working with Kushagra has been a fantastic experience. He took the time to understand our needs and delivered a solution that exceeded our expectations. His ability to combine technical expertise with creativity is truly impressive.",
    name: "Liam D.",
    title: "CEO of Future Vision",
  },
  {
    quote:
      "Working with Kushagra has been a fantastic experience. He took the time to understand our needs and delivered a solution that exceeded our expectations. His ability to combine technical expertise with creativity is truly impressive.",
    name: "Liam D.",
    title: "CEO of Future Vision",
  },
  {
    quote:
      "Working with Kushagra has been a fantastic experience. He took the time to understand our needs and delivered a solution that exceeded our expectations. His ability to combine technical expertise with creativity is truly impressive.",
    name: "Liam D.",
    title: "CEO of Future Vision",
  },
  {
    quote:
      "Working with Kushagra has been a fantastic experience. He took the time to understand our needs and delivered a solution that exceeded our expectations. His ability to combine technical expertise with creativity is truly impressive.",
    name: "Liam D.",
    title: "CEO of Future Vision",
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
    title: "Data Science Intern",
    desc: "Assisted in analysing data and developing ML Models.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Virtual Internships",
    desc: "Virtually worked with the companies like Goldman Sachs, Accenture, TATA, PwC Switzerland and BCG GenAI.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Real World Projects",
    desc: "Worked on real world projects and enhanced my key skills for Data field.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Exploratory Data Analysis",
    desc: "Cleaned up unstructured data and analyzed it with PowerBI Dashbords for useful insights.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/DS-Kushagra",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/_kushagra.ag_",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kushagra--agrawal",
  },
];
