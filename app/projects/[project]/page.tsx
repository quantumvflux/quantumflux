"use client"
import ReadmeViewer from "@/app/components/ReadmeViewer"
import { Section } from "@/app/components/Section"
import { usePathname } from "next/navigation"

const page = () => {
    const repo = usePathname().split('/')[2]
    return (
        <Section>
            <div className="font-medium text-xl">
                <ReadmeViewer owner="quantumvflux" repo={repo} />
            </div>
        </Section>
    )
}

export default page