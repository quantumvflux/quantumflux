"use client"
import ReadmeViewer from "@/app/components/ReadmeViewer"
import { usePathname } from "next/navigation"

export const ReadmeSection = () => {

    const pathname = usePathname()
    const repo = pathname.split('/')[2]

    return (
        <div className="font-medium text-xl">
            <ReadmeViewer owner="quantumvflux" repo={repo} />
        </div>
    )
}
