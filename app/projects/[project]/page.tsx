import { Section } from "@/app/components/Section"
import Link from "next/link"
import { ReadmeSection } from "./readmeSection/ReadmeSection"

const page = () => {

    return (
        <Section>
            <div className="flex gap-4 text-2xl font-semibold">
                <Link href={"/"} className="hover:underline">Github repo</Link>
                <Link href={"/"} className="hover:underline">Web page</Link>
            </div>
            <hr className="border-t-2 border-text mt-4 mb-2" />
            <ReadmeSection />
        </Section>
    )
}

export default page