import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  react,
  webDevelopment,
  fs,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Fronted Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    icon: webDevelopment,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Aiding in the advancement and maintenance of web applications built in React.js and its related technologies.",
      "Implementing responsive design best practices while also addressing cross-browser issues.",
      "Conducting code reviews and providing constructive feedback on fellow developers’ codes.",
    ],
  },
  {
    title: "React.js Developer",
    icon: react,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Feb 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    icon: react,
    iconBg: "#050816",
    date: "Mar 2024 - June 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    icon: fs,
    iconBg: "#050816",
    date: "July 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Once Sheryan improved his site, the traffic shot up by fifty percent. We are ever so grateful to them!",
    name: "Sajid Ul Bari",
    designation: "Full Stack Web Developer",
    href: "https://sazidfullstack.vercel.app/",
  },
  {
    testimonial:
      "Creating a website as stunning as our product seemed to be impossible. However, Shreyan was able to defy my expectations.",
    name: "Rezaul Islam",
    designation: "Fronted Web Developer",
    href: "#",
  },
  {
    testimonial:
      "Shreyan cares about the success of his clients more than any other web developer I have met in my life.",
    name: "Shimanto Kumar Mondol",
    designation: "Django developer",
    href: "https://shimanto-port.onrender.com/",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        href: "https://react.dev/",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        href: "https://www.mongodb.com/",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        href: "https://tailwindcss.com/",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        href: "https://react.dev/",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        href: "https://sass-lang.com/",
        color: "pink-text-gradient",
      },
      {
        name: "rapidapi",
        href: "https://rapidapi.com/hub",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        href: "https://nextjs.org/",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        href: "https://firebase.google.com/",
        color: "yellow-text-gradient",
      },
      {
        name: "sass",
        href: "https://sass-lang.com/",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
