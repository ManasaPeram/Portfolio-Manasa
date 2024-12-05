import {
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
 

import { TbBrandCpp, TbDatabaseSearch, TbHexagonLetterC } from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql, BiLogoGmail } from "react-icons/bi";
import { SiNextdotjs, SiNestjs , SiPostgresql, SiStrapi} from 'react-icons/si';
import {
  SiGooglecloud,
  SiMysql,
  SiTableau,
  SiTensorflow,
  SiPytorch,
  SiFlask,
  SiPandas,
  SiScikitlearn,
  SiMicrosoftazure,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { RiOpenaiFill } from "react-icons/ri";
import { LuBird } from "react-icons/lu";


export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Contact", path: "/contact" },
  { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "ReactJS",
    icon: TbDatabaseSearch,
  },
  {
    interest: "NextJS",
    icon: SiNextdotjs,
  },
  {
    interest: "Artificial Intelligence",
    icon: IoHardwareChipOutline,
  },
  {
    interest: "Gen AI",
    icon: FaRobot,
  },
  // {
  //   interest: "Visualization",
  //   icon: BsFileBarGraph,
  // },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Cloud",
    icon: SiGooglecloud,
  },
  {
    interest: "Web Streaming",
    icon: BsGlobe,
  },
  {
    interest: "Docker",
    icon: FaDocker,
  },
];

export const skillsData = [
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NestJS",
    icon: SiNestjs,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Strapi CMS",
    icon: SiStrapi,
  },
  // {
  //   name: "Medusa",
  //   icon: SiTableau,
  // },
  // {
  //   name: "Scikit",
  //   icon: SiScikitlearn,
  // },
  // {
  //   name: "Tensorflow",
  //   icon: SiTensorflow ,
  // },
  // {
  //   name: "Pytorch",
  //   icon: SiPytorch ,
  // },
  {
    name: "Github",
    icon: FaGithub,
  },
  // {
  //   name: "Flask",
  //   icon: SiFlask,
  // },
  // {
  //   name: "GCP",
  //   icon: DiGoogleCloudPlatform,
  // },
  // {
  //   name: "Azure",
  //   icon: SiMicrosoftazure,
  // },
  {
    name: "Docker",
    icon: FaDocker,
  },
  // {
  //   name: "OpenAI",
  //   icon: RiOpenaiFill,
  // },
  // {
  //   name: "LangChain",
  //   icon: LuBird,
  // },
];

export const workData = [
  {
    company: "Zelarsoft",
    designation: "Software Engineer",
    duration: "October 2022 - Present",
    companyImg: "zelar_logo.jpg",
    description: (
      <>
        I am employed as a ReactJS, NextJS, and NestJS developer with extensive
        experience in both front-end and back-end development. My expertise
        includes building scalable and efficient web applications, creating
        RESTful APIs, and integrating third-party services. I have hands-on
        experience with full-stack development, including state management,
        server-side rendering, and component-based architecture. Additionally, I
        have good knowledge on Docker, Kubernetes,ensuring seamless deployment
        and performance optimization of applications.
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "ALL",
    title: "Gemini-AI Chatbot",
    image: "chatbot",
    link: null,
    source:
      "https://github.com/ManasaPeram/Chatgpt-withgeminiAI",
  },
  {
    type: "ALL",
    title: "Portfolio Website",
    image: "home",
    link: null,
    source: "https://github.com/sastrysasi4/My-Portfolio-sasidhar",
  },
  {
    type: "ALL",
    title: "Nest CRUD",
    image: "Nest-crud",
    link: null,
    source: "https://github.com/ManasaPeram/CRUD-REST-API-with-NestJS-Docker-Swagger-and-Prisma",
  },
  // {
  //   type: "ALL",
  //   title: "PDF Chat with Google GeminiAI",
  //   image: "pdf-chat-gemini",
  //   link: null,
  //   source: "https://github.com/sastrysasi4/PDF-Chat-with-Google-Gemini-AI",
  // },
  // {
  //   type: "ALL",
  //   title: "Real-Estate Price Prediction",
  //   image: "real-estate",
  //   link: null,
  //   source: "https://github.com/sastrysasi4/Real-Estate-Price-Prediction",
  // },
];

export const socialMediaLinks = [
  {
    href: "https://github.com/zlr-manasap",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/peram-manasa-771a58220/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "mailto:manasaperam1980@gmail.com",
    icon: BiLogoGmail,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
