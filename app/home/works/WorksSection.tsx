import { Heading } from "@/app/components/Heading";
import { Section } from "@/app/components/Section";
import { ProjectCard } from "@/app/projects/projectCard/ProjectCard";
import { projectData } from "@/consts/projectData";

export const WorksSection = () => {
  return (
    <Section>
      <Heading text="my work:" />
      <div className="flex flex-wrap items-center justify-center gap-4">
        {projectData.length > 0 ? (
          projectData.map(
            ({ name, technologies, image, company, link }, index) => (
              <div
                key={name}
                className={index === projectData.length - 1 ? "self-start" : ""}
              >
                <ProjectCard
                  name={name}
                  technologyNames={technologies}
                  image={image}
                  company={company}
                  link={link}
                />
              </div>
            )
          )
        ) : (
          <p className="font-semibold text-2xl">
            its a lil dusty here for now...
          </p>
        )}
      </div>
    </Section>
  );
};
