import { StaticImageData } from "next/image";
import { ETechnologies } from "@/interfaces/interfaces";
import uitool from "@/public/assets/projects/uitool/uitool.png";
import uitrade from "@/public/assets/projects/uitrade/utirade.png";
import riffao from "@/public/assets/projects/riffao/riffao-logo.png";
import dager from "@/public/assets/projects/dager/dager.png";
import linkz from "@/public/assets/products/linkz/assets/links.png";
import vibe from "@/public/assets/projects/vibecommerce/vibecommerce.png";
import tantra from "@/public/assets/projects/tantratouch/tantratrouch.png";
import affinit from "@/public/assets/projects/affinit/affinit.png";
import flightpath from "@/public/assets/projects/flightpath/flightpath.png";
import set from "@/public/assets/projects/set/set.png";

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
    name: "LinkWorlds",
    image: linkz,
    technologies: [
      ETechnologies.React,
      ETechnologies.TailwindCSS,
      ETechnologies.HTML,
      ETechnologies.TypeScript,
      ETechnologies.MongoDB,
      ETechnologies.NestJs,
      ETechnologies.Redux,
    ].sort((a, b) => a.localeCompare(b)),
    link: "https://app.linkworlds.site/auth",
    company: "Abstract",
  },
  {
    name: "Flightpath",
    image: flightpath,
    technologies: [
      ETechnologies.React,
      ETechnologies.MaterialUI,
      ETechnologies.GSAP,
      ETechnologies.Threejs,
      ETechnologies.HTML,
      ETechnologies.TypeScript,
      ETechnologies.NestJs,
      ETechnologies.Redux,
    ].sort((a, b) => a.localeCompare(b)),
    link: "https://flightpath-eight.vercel.app/",
    company: "Abstract",
  },
  {
    name: "Affini-T",
    image: affinit,
    technologies: [
      ETechnologies.React,
      ETechnologies.MaterialUI,
      ETechnologies.GSAP,
      ETechnologies.HTML,
      ETechnologies.TypeScript,
      ETechnologies.NestJs,
      ETechnologies.Redux,
    ].sort((a, b) => a.localeCompare(b)),
    link: "https://affinit.netlify.app/",
    company: "Abstract",
  },
  {
    name: "Set Industry",
    image: set,
    technologies: [
      ETechnologies.React,
      ETechnologies.MaterialUI,
      ETechnologies.GSAP,
      ETechnologies.HTML,
      ETechnologies.TypeScript,
      ETechnologies.NestJs,
      ETechnologies.Redux,
    ].sort((a, b) => a.localeCompare(b)),
    link: "https://set-mdx.netlify.app/",
    company: "Abstract",
  },
  {
    name: "Tantra Touch",
    image: tantra,
    technologies: [
      ETechnologies.React,
      ETechnologies.MaterialUI,
      ETechnologies.GSAP,
      ETechnologies.HTML,
      ETechnologies.TypeScript,
      ETechnologies.NestJs,
      ETechnologies.Redux,
    ].sort((a, b) => a.localeCompare(b)),
    link: "https://www.tantratouch.com/",
    company: "Abstract",
  },
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
    ].sort((a, b) => a.localeCompare(b)),
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
  {
    name: "Vibecommerce",
    image: vibe,
    technologies: [
      ETechnologies.React,
      ETechnologies.TypeScript,
      ETechnologies.NextJs,
      ETechnologies.TailwindCSS,
      ETechnologies.Redux,
      ETechnologies.CSS,
    ].sort((a, b) => a.localeCompare(b)),
    link: "https://vibecommerce.vercel.app/",
    company: "Personal Project",
  },
];
