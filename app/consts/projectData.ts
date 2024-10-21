import { StaticImageData } from "next/image";
import { ETechnologies } from "../interfaces/interfaces";
import defaultImage from "@/public/assets/profile-1.jpg";
import tantra from "@/public/assets/projects/tantratouch/tantratrouch.png";

export interface IProject {
  name: string;
  technologies: string[];
  image: StaticImageData;
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
  },
  {
    name: "UI Tool",
    image: defaultImage,
    technologies: [
      ETechnologies.React,
      ETechnologies.TypeScript,
      ETechnologies.NextJs,
      ETechnologies.CSS,
      ETechnologies.TailwindCSS,
      ETechnologies.Redux,
    ].sort((a, b) => a.localeCompare(b)),
    readme: "/assets/projects/uitool/readme/uitool.md",
  },
  {
    name: "Linkz",
    image: defaultImage,
    technologies: [
      ETechnologies.React,
      ETechnologies.TypeScript,
      ETechnologies.NextJs,
      ETechnologies.CSS,
      ETechnologies.TailwindCSS,
      ETechnologies.NestJs,
      ETechnologies.MongoDB,
      ETechnologies.Vite,
    ].sort((a, b) => a.localeCompare(b)),
    readme: "/assets/projects/linkz/readme/linkz.md",
  },
];
