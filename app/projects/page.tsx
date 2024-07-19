import { Section } from "../components/Section"
import { ProjectCard } from "./projectCard/ProjectCard"
import { IProject, projectData } from "../consts/projectData"

const page = () => {
    return (
        <Section>
            <div className="flex flex-wrap justify-center gap-8">
                {
                    projectData &&
                    projectData.map((project: IProject) => (
                        <ProjectCard name={project.name} technologyNames={project.technologies} />
                    ))
                }
            </div>
        </Section>
    )
}

export default page