import { Heading } from "@/app/components/Heading"
import { Section } from "@/app/components/Section"

export const Main = () => {
    return (
        <div>
            <Section>
                <Heading text="about:" />
                <p className="text-xl">some boring sh*t</p>
            </Section>
        </div>
    )
}
