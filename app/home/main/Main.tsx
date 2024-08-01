import { Heading } from "@/app/components/Heading"
import { Section } from "@/app/components/Section"

export const Main = () => {
    return (
        <div>
            <Section>
                <Heading text="about:" />
                <p className="text-xl">Some boring sh*t right here...</p>
            </Section>
        </div>
    )
}
