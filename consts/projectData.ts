import { StaticImageData } from "next/image";
import { ETechnologies } from "@/interfaces/interfaces";
import defaultImage from "@/public/assets/profile-1.jpg";
import tantra from "@/public/assets/projects/tantratouch/tantratrouch.png";
import uitool from "@/public/assets/projects/uitool/uitool.png";
import riffao from "@/public/assets/projects/riffao/riffao-logo.png";

export interface IProject {
  name: string;
  technologies: string[];
  image: StaticImageData;
  link: string;
  readme?: string;
  company?: string;
}

export const projectData: IProject[] = [
  {
    name: "Tantra touch",
    image: tantra,
    technologies: [
      ETechnologies.React,
      ETechnologies.TypeScript,
      ETechnologies.NextJs,
      ETechnologies.CSS,
      ETechnologies.MaterialUI,
      ETechnologies.Strapi,
    ].sort((a, b) => a.localeCompare(b)),
    readme: "/assets/projects/tantratouch/readme/tantratouch.md",
    link: "https://tantratouch-mdx.vercel.app/",
    company: "Undead Devz",
  },
  {
    name: "UI Tool",
    image: uitool,
    technologies: [
      ETechnologies.React,
      ETechnologies.TypeScript,
      ETechnologies.NextJs,
      ETechnologies.CSS,
      ETechnologies.TailwindCSS,
      ETechnologies.Redux,
    ].sort((a, b) => a.localeCompare(b)),
    readme: "/assets/projects/uitool/readme/uitool.md",
    link: "https://uitool.com/",
    company: "Notimation",
  },
  {
    name: "Riffao",
    image: riffao,
    technologies: [
      ETechnologies.React,
      ETechnologies.TypeScript,
      ETechnologies.NextJs,
      ETechnologies.CSS,
      ETechnologies.TailwindCSS,
      ETechnologies.Redux,
    ].sort((a, b) => a.localeCompare(b)),
    link: "https://riffao.net/",
    company: "Riffao",
  },
  // {
  //   name: "Nephilim",
  //   image: nephilim,
  //   technologies: [
  //     ETechnologies.HTML,
  //     ETechnologies.JavaScript,
  //     ETechnologies.CSS,
  //   ].sort((a, b) => a.localeCompare(b)),
  //   readme: "/assets/projects/uitool/readme/nephilim.md",
  //   link: "https://nephilim-official-page.vercel.app/",
  //   company: "Freelance",
  // },
];
