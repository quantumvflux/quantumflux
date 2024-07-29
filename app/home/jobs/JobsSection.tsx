import { Heading } from "@/app/components/Heading"
import { Section } from "@/app/components/Section"
import { jobz } from "@/app/consts/data"
import { JobItem } from "./jobItem/JobItem"
import { IJobz } from "@/app/interfaces/interfaces"

export const JobsSection = () => {
    return (
        <Section>
            <Heading text="companies/people i have worked with:" />
            <div className="flex justify-center flex-wrap gap-4">
                {jobz.map(({ name, description, image, link }) => (
                    <JobItem name={name} description={description} image={image} link={link} key={name} />
                ))}
            </div>
        </Section>
    )
}
