import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AI Developer",
    company_name: "Freelance",
    icon: github,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Leveraging AI tools such as GitHub Copilot and ChatGPT to accelerate development workflows and increase productivity.",
      "Utilizing AI-assisted coding to generate optimized and maintainable frontend logic for modern web applications.",
      "Integrating intelligent suggestions and code completion to enhance efficiency and reduce debugging time.",
      "Continuously experimenting with AI-driven development strategies to improve UI performance, code readability, and user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ian does.",
    name: "Micheal",
    designation: "UI/UX Designer",
    company: "Clutch Foundry",
    image: firstTestimonial,
  },
  {
    testimonial:
      "After Ian optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Wanjala Enock",
    designation: "Web Designer",
    company: "Volane",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Ian's attention to detail and innovative solutions have significantly improved our platform's performance.",
    name: "Carlos",
    designation: "Senior Software Engineer",
    company: "Clutch Foundry",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Clutch Foundry Events Platform",
    description:
      "Collaborated with Clutch Foundry to design and develop a dynamic events platform that streamlines the discovery and registration of innovation-focused gatherings.\n\nImplemented a responsive and intuitive user interface using React.js and Tailwind CSS, ensuring seamless navigation across devices.\n\nLeveraged AI tools like GitHub Copilot and ChatGPT to enhance development efficiency, troubleshoot effectively, and generate optimized frontend logic.\n\nIntegrated features such as real-time event updates, filtering options, and interactive elements to improve user engagement and experience.\n\nEnsured the platform's scalability and performance to accommodate Clutch Foundry's growing community of innovators and thought leaders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/huzaifahmedz/tekisky",
  },
];

export { services, technologies, experiences, testimonials, projects };
