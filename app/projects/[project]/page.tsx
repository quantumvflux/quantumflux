"use client"
import ReadmeViewer from "@/app/components/ReadmeViewer"
import { Section } from "@/app/components/Section"
import Link from "next/link"
import { usePathname } from "next/navigation"

const page = () => {
    const repo = usePathname().split('/')[2]
    return (
        <Section>
            <div className="flex gap-4 text-2xl font-semibold">
                <Link href={"/"} className="hover:underline">Github repo</Link>
                <Link href={"/"} className="hover:underline">Web page</Link>
            </div>
            <hr className="border-t-2 border-text mt-4 mb-2" />
            <div className="font-medium text-xl">
                <ReadmeViewer owner="quantumvflux" repo={repo} />
            </div>
        </Section>
    )
}

export default page