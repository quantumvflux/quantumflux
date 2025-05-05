import { FaReact, FaHtml5, FaCss3, FaJs, FaVuejs } from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiNestjs,
  SiMongodb,
  SiFigma,
  SiChakraui,
  SiTailwindcss,
  SiVite,
  SiMysql,
  SiMarkdown,
  SiArchlinux,
  SiUbuntu,
  SiPostman,
  SiVisualstudiocode,
  SiNeovim,
  SiPrisma,
  SiMui,
  SiStrapi,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IJobz, ISkillItem, ISkillSection } from "@/interfaces/interfaces";

import notimationLogo from "/public/assets/jobs/notimation-logo.jpg";
import undeadLogo from "/public/assets/jobs/undead-logo.png";
import riffaoLogo from "/public/assets/jobs/riffao-logo.png";
import abstractLogo from "/public/assets/jobs/logo-abstract.png";
import { TbBrandThreejs } from "react-icons/tb";
import { MdAnimation } from "react-icons/md";

export const urls = [
  {
    data: "/",
  },
  {
    data: "/projects",
  },
  {
    data: "/socials",
  },
];

export const languages: ISkillItem[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3 },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Markdown", icon: SiMarkdown },
].sort((a, b) => a.name.localeCompare(b.name));

export const frameworks: ISkillItem[] = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Vue.js", icon: FaVuejs },
  { name: "Nest.js", icon: SiNestjs },
  { name: "ChakraUI", icon: SiChakraui },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Vite", icon: SiVite },
  { name: "Redux", icon: SiRedux },
  { name: "Material UI", icon: SiMui },
  { name: "Strapi", icon: SiStrapi },
  { name: "Three.js", icon: TbBrandThreejs },
  { name: "GSAP", icon: MdAnimation },
].sort((a, b) => a.name.localeCompare(b.name));

export const databases: ISkillItem[] = [
  { name: "SQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Prisma", icon: SiPrisma },
].sort((a, b) => a.name.localeCompare(b.name));

export const tools: ISkillItem[] = [
  { name: "Arch Linux", icon: SiArchlinux },
  { name: "Ubuntu", icon: SiUbuntu },
  { name: "Postman", icon: SiPostman },
  { name: "Visual Studio Code", icon: SiVisualstudiocode },
  { name: "Nvim", icon: SiNeovim },
  { name: "Figma", icon: SiFigma },
].sort((a, b) => a.name.localeCompare(b.name));

export const skillCategories: ISkillSection[] = [
  {
    title: "Languages",
    skills: languages,
  },
  {
    title: "Frameworks and Libraries",
    skills: frameworks,
  },
  {
    title: "Databases & ORMs",
    skills: databases,
  },
  {
    title: "Tools",
    skills: tools,
  },
];

export const jobz: IJobz[] = [
  {
    name: "Abstract",
    image: abstractLogo,
    description: "Fullstack Developer",
  },
  {
    name: "Notimation",
    image: notimationLogo,
    description: "Frontend developer",
  },
  {
    name: "Undead Devz",
    image: undeadLogo,
    description: "Fullstack developer",
  },
  {
    name: "Riffao",
    image: riffaoLogo,
    description: "Frontend developer",
  },
];

interface IContactData {
  name: string;
  link: string;
  color: string;
}

export const contactData: IContactData[] = [
  {
    name: "Github",
    link: "https://github.com/quantumvflux",
    color: "#4c4f69",
  },
  {
    name: "Discord",
    link: "https://discord.com/channels/quantumflux",
    color: "#7287fd",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/marcos-baravalle/",
    color: "#1e66f5",
  },
  {
    name: "Spotify",
    link: "https://open.spotify.com/user/marcosfloyd73?si=9919237ba1b84b3e",
    color: "#40a02b",
  },
];
