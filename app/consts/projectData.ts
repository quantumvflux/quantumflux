import { ETechnologies } from "../interfaces/interfaces";

export interface IProject {
    name: string;
    technologies: string[];
}

export const projectData: IProject[] = [
    {
        name: "lazyvim-config",
        technologies: [ETechnologies.React, ETechnologies.CSS, ETechnologies.JavaScript]
    }
]