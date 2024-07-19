import { Section } from "../components/Section"
import { ProjectCard } from "./projectCard/ProjectCard"
import { IProject, projectData } from "../consts/projectData"

const page = () => {
    return (
        <Section>
            <div className="flex flex-wrap justify-center gap-8">
                {
                    projectData.length > 1 ? (
                        projectData.map((project: IProject) => (
                            <ProjectCard key={project.name} name={project.name} technologyNames={project.technologies} />
                        ))
                    ) : <p className="font-semibold text-xl">there are no projects yet...</p>

                }
            </div>
        </Section>
    )
}

export default page