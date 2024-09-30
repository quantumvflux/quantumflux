import { FaReact, FaHtml5, FaCss3, FaJs, FaVuejs } from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiNestjs,
  SiMongodb,
  SiFigma,
  SiPython,
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
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { IJobz, ISkillItem, ISkillSection } from "../interfaces/interfaces";

import notimationLogo from "/public/assets/jobs/notimation-logo.jpg";
import undeadLogo from "/public/assets/jobs/undead-logo.png";
import adrianLogo from "/public/assets/jobs/adrian-logo.png";
import nephilimLogo from "/public/assets/jobs/nephilim-logo.jpg";
import riffaoLogo from "/public/assets/jobs/riffao-logo.png";

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
  {
    data: "/extra",
  },
];

export const languages: ISkillItem[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3 },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Go", icon: FaGolang },
  { name: "Python", icon: SiPython },
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
    name: "Notimation",
    image: notimationLogo,
    description: "Frontend developer",
    link: "",
  },
  {
    name: "Undead Devz",
    image: undeadLogo,
    description: "Fullstack developer",
    link: "/",
  },
  {
    name: "Riffao",
    image: riffaoLogo,
    description: "Frontend development",
    link: "/",
  },
  {
    name: "Adrian Moreno",
    image: adrianLogo,
    description: "Personal portfolio development",
    link: "/",
  },
  {
    name: "Nephilim Band",
    image: nephilimLogo,
    description: "Landing page development",
    link: "/",
  },
];
