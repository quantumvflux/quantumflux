import { Heading } from "@/app/components/Heading"
import { Section } from "@/app/components/Section"
import { jobz } from "@/app/consts/data"
import { JobItem } from "./jobItem/JobItem"

export const JobsSection = () => {
    return (
        <Section>
            <Heading text="companies/people i have worked with:" />
            <div className="flex justify-center flex-wrap gap-4">
                {jobz.map(job => (
                    <JobItem name={job.name} description={job.description} image={job.image} key={job.name} />
                ))}
            </div>
        </Section>
    )
}
