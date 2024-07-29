import { Section } from "../components/Section"
import { ProjectCard } from "./projectCard/ProjectCard"
import { IProject, projectData } from "../consts/projectData"
import { Heading } from "../components/Heading"

const page = () => {
    return (
        <Section>
            <Heading text="my projects:" />
            <div className="flex flex-wrap items-stretch justify-center gap-8">
                {
                    projectData.length > 0 ? (
                        projectData.map(({ name, technologies }) => (
                            <ProjectCard key={name} name={name} technologyNames={technologies} />
                        ))
                    ) : <p className="font-semibold text-xl">its a lil dusty here for now...</p>
                }
            </div>
        </Section>
    )
}

export default page