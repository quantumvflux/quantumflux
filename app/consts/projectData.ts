import { ETechnologies } from "./data"

export interface IProject {
    name: string
    technologies: string[]
}

export const projectData = [
    {
        name: "VibeCommerce",
        technologies: [ETechnologies.React, ETechnologies.TypeScript, ETechnologies.MongoDB]
    },
    {
        name: "Patas",
        technologies: [ETechnologies.React, ETechnologies.CSS, ETechnologies.Go]
    },
    {
        name: "VibeCommerce",
        technologies: [ETechnologies.React, ETechnologies.TypeScript, ETechnologies.MongoDB]
    },
    {
        name: "Patas",
        technologies: [ETechnologies.React, ETechnologies.CSS, ETechnologies.Go]
    }
]