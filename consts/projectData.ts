import { StaticImageData } from "next/image";
import { ETechnologies } from "@/interfaces/interfaces";
import defaultImage from "@/public/assets/profile-1.jpg";
import tantra from "@/public/assets/projects/tantratouch/tantratrouch.png";
import uitool from "@/public/assets/projects/uitool/uitool.png";
import nephilim from "@/public/assets/projects/nephilim/nephilim.png";
import vibecommerce from "@/public/assets/projects/vibecommerce/vibecommerce.png";

export interface IProject {
  name: string;
  technologies: string[];
  image: StaticImageData;
  link: string;
  readme?: string;
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
  },
  {
    name: "Nephilim",
    image: nephilim,
    technologies: [
      ETechnologies.HTML,
      ETechnologies.JavaScript,
      ETechnologies.CSS,
    ].sort((a, b) => a.localeCompare(b)),
    readme: "/assets/projects/uitool/readme/nephilim.md",
    link: "https://nephilim-official-page.vercel.app/",
  },
  {
    name: "VibeCommerce",
    image: vibecommerce,
    technologies: [
      ETechnologies.React,
      ETechnologies.TypeScript,
      ETechnologies.CSS,
      ETechnologies.TailwindCSS,
    ].sort((a, b) => a.localeCompare(b)),
    link: "https://vibecommerce.vercel.app/",
  },
];
