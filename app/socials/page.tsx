import { Section } from "@/app/components/Section"
import Link from "next/link"
import { Heading } from "../components/Heading"

const page = () => {
    return (
        <Section>
            <Heading text="my socials:" />
            <div className="flex flex-col justify-center items-center gap-4 text-white text-2xl">
                <Link className="w-64 h-12 flex justify-center items-center bg-[#dc8a78] hover:scale-110 transition-all" href="/">Github</Link>
                <Link className="w-64 h-12 flex justify-center items-center bg-[#179299] hover:scale-110 transition-all" href="/">Discord</Link>
                <Link className="w-64 h-12 flex justify-center items-center bg-[#1e66f5] hover:scale-110 transition-all" href="/">LinkedIn</Link>
                <Link className="w-64 h-12 flex justify-center items-center bg-[#40a02b] hover:scale-110 transition-all" href="/">Spotify</Link>
            </div>
        </Section>
    )
}

export default page