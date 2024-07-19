import { ETechnologies } from "../interfaces/interfaces";

export interface IProject {
    name: string;
    technologies: string[];
}

export const projectData = [
    {
        name: "quantumvflux",
        technologies: [ETechnologies.React, ETechnologies.TypeScript, ETechnologies.MongoDB],
    },
    {
        name: "dnd-test",
        technologies: [ETechnologies.React, ETechnologies.CSS, ETechnologies.Go],
    },
    {
        name: "lazyvim-config",
        technologies: [ETechnologies.React, ETechnologies.TypeScript, ETechnologies.MongoDB],
    },
    {
        name: "bullsh*t",
        technologies: [ETechnologies.React, ETechnologies.CSS, ETechnologies.Go],
    }
]