import { StaticImageData } from "next/image";
import { ETechnologies } from "@/interfaces/interfaces";
import uitool from "@/public/assets/projects/uitool/uitool.png";
import uitrade from "@/public/assets/projects/uitrade/utirade.png";
import riffao from "@/public/assets/projects/riffao/riffao-logo.png";
import dager from "@/public/assets/projects/dager/dager.png";

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
    name: "Dot Dager",
    image: dager,
    technologies: [
      ETechnologies.React,
      ETechnologies.TailwindCSS,
      ETechnologies.HTML,
      ETechnologies.TypeScript,
      ETechnologies.Threejs,
      ETechnologies.GSAP,
    ],
    link: "https://dot-dager-pickles.netlify.app/",
    company: "Undead Devz",
  },
  {
    name: "UI Tool",
    image: uitool,
    technologies: [
      ETechnologies.React,
      ETechnologies.NextJs,
      ETechnologies.TypeScript,
      ETechnologies.CSS,
      ETechnologies.TailwindCSS,
      ETechnologies.Redux,
    ].sort((a, b) => a.localeCompare(b)),
    readme: "/assets/projects/uitool/readme/uitool.md",
    link: "https://uitool.com/",
    company: "Notimation",
  },
  {
    name: "UI Trade",
    image: uitrade,
    technologies: [
      ETechnologies.React,
      ETechnologies.TypeScript,
      ETechnologies.NextJs,
      ETechnologies.CSS,
      ETechnologies.TailwindCSS,
      ETechnologies.Redux,
    ].sort((a, b) => a.localeCompare(b)),
    readme: "/assets/projects/uitrade/readme/uitrade.md",
    link: "https://uitrade.com/",
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
  //   readme: "/assets/projects/nephilim/readme/nephilim.md",
  //   link: "https://nephilim-official-page.vercel.app/",
  //   company: "Freelance",
  // },
];
